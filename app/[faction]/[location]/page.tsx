"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { GatheringData, NPCData } from "@/utils/locations/types";
import { MapProps } from "@/components/Map/Map.props";
import { MapSideBar } from "@/components/MapSideBar";
import { useFetch } from "@/hooks/useFetch";
import { getNpcTypeWeight } from "@/utils/getNpcTypeWeight";

const Map = dynamic<MapProps>(
  () => import("@/components/Map").then((module) => module.Map),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  }
);

export default function Page({
  params,
}: {
  params: { location: string; faction: string };
}) {
  const [gatheringData, gatheringError, gatheringIsLoading] =
    useFetch<GatheringData>(`/data/gathering/${params.location}.json`);

  const [npcsData, npcsError, npcsIsLoading] = useFetch<NPCData>(
    `/data/npcs/${params.location}.json`
  );

  const [essencetappingMaterials, setEssencetappingMaterials] = useState<
    GatheringData[]
  >([]);

  const [npcs, setNpcs] = useState<NPCData[]>([]);

  const [hiddenEssencetappingMaterialsId, setHiddenEssencetappingMaterialsId] =
    useState<string[]>([]);

  const [hiddenNpcTypes, setHiddenNpcTypes] = useState<string[]>([]);

  const changeNpcsTypeVisibility = (npcType: string) => {
    hiddenNpcTypes.includes(npcType)
      ? setHiddenNpcTypes(
          hiddenNpcTypes.filter((hiddenNpcType) => hiddenNpcType !== npcType)
        )
      : setHiddenNpcTypes([...hiddenNpcTypes, npcType]);
  };

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
    gatheringData &&
      setHiddenEssencetappingMaterialsId(
        gatheringData.map((material) => material.id)
      );
  }, [gatheringData]);

  const [locationNpcTypes, setLocationNpcTypes] = useState<string[]>([]);

  useEffect(() => {
    npcsData && setNpcs(npcsData);
    npcsData &&
      setLocationNpcTypes(Array.from(new Set(npcsData.map((npc) => npc.type))));
  }, [npcsData]);

  useEffect(() => {
    setEssencetappingMaterials(
      gatheringData.filter(
        (material) => !hiddenEssencetappingMaterialsId.includes(material.id)
      )
    );
  }, [hiddenEssencetappingMaterialsId]);

  useEffect(() => {
    setNpcs(npcsData.filter((npc) => !hiddenNpcTypes.includes(npc.type)));
  }, [hiddenNpcTypes]);

  return (
    <>
      <MapSideBar
        essencetappingData={[...gatheringData].sort(
          (a, b) => a.gathering_lvl - b.gathering_lvl
        )}
        locationNpcTypes={[...locationNpcTypes].sort(
          (a, b) => getNpcTypeWeight(a) - getNpcTypeWeight(b)
        )}
        changeGatheringMaterialVisibility={changeGatheringMaterialVisibility}
        changeNpcsTypeVisibility={changeNpcsTypeVisibility}
        isGatheringMaterialHidden={isGatheringMaterialHidden}
        selectedFaction={params.faction}
        selectedLocation={params.location}
      />
      <Map
        essencetappingData={essencetappingMaterials}
        npcsData={npcs}
        location={params.location}
        faction={params.faction}
      />
    </>
  );
}
