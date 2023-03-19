"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { GatheringData } from "@/utils/locations/types";
import { MapProps } from "@/components/Map/Map.props";
import { MapSideBar } from "@/components/MapSideBar";
import { useFetch } from "@/hooks/useFetch";

const Map = dynamic<MapProps>(
  () => import("@/components/Map").then((module) => module.Map),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  }
);

export default function Page({ params }: { params: { location: string } }) {
  const [gatheringData, gatheringError, gatheringIsLoading] =
    useFetch<GatheringData>(`/data/gathering/${params.location}.json`);

  const [essencetappingMaterials, setEssencetappingMaterials] = useState<
    GatheringData[]
  >([]);

  const [hiddenEssencetappingMaterialsId, setHiddenEssencetappingMaterialsId] =
    useState<string[]>([]);

  const changeGatheringMaterialVisibility = (materialId: string) => {
    hiddenEssencetappingMaterialsId.includes(materialId)
      ? setHiddenEssencetappingMaterialsId(
          hiddenEssencetappingMaterialsId.filter(
            (hiddenMaterialId) => hiddenMaterialId !== materialId
          )
        )
      : setHiddenEssencetappingMaterialsId([
          ...hiddenEssencetappingMaterialsId,
          materialId,
        ]);
  };

  const isGatheringMaterialHidden = (materialId: string) => {
    return hiddenEssencetappingMaterialsId.includes(materialId);
  };

  useEffect(() => {
    gatheringData && setEssencetappingMaterials(gatheringData);
  }, [gatheringData]);

  useEffect(() => {
    setEssencetappingMaterials(
      gatheringData.filter(
        (material) => !hiddenEssencetappingMaterialsId.includes(material.id)
      )
    );
  }, [hiddenEssencetappingMaterialsId]);

  return gatheringError ? (
    <h1>{gatheringError}</h1>
  ) : (
    <>
      <MapSideBar
        essencetappingData={[...gatheringData].sort(
          (a, b) => a.gathering_lvl - b.gathering_lvl
        )}
        changeGatheringMaterialVisibility={changeGatheringMaterialVisibility}
        isGatheringMaterialHidden={isGatheringMaterialHidden}
      />
      <Map
        essencetappingData={essencetappingMaterials}
        location={params.location}
      />
    </>
  );
}
