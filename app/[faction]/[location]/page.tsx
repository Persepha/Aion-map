"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { GatheringData } from "@/utils/locations/types";
import { MapProps } from "@/components/Map/Map.props";
import { MapSideBar } from "@/components/MapSideBar";
import { useFetch } from "@/hooks/useFetch";
import { getNpcTypeWeight } from "@/utils/getNpcTypeWeight";
import { NPCData } from "@/utils/npcs/types";
import { Loader } from "@/components/Loader";

const Map = dynamic<MapProps>(
  () => import("@/components/Map").then((module) => module.Map),
  {
    loading: () => <Loader />,
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

  const [gatheringMapMarkers, setGatheringMapMarkers] = useState<
    GatheringData[]
  >([]);

  const essencetappingMaterialsAscending = [...gatheringData]
    .filter((material) => material.gathering_type !== "Aether")
    .sort((a, b) => a.gathering_lvl - b.gathering_lvl);

  const aethertapingMaterialsAscending = [...gatheringData]
    .filter((material) => material.gathering_type === "Aether")
    .sort((a, b) => a.gathering_lvl - b.gathering_lvl);

  useEffect(() => {
    const filterGatheringData = () => {
      if (gatheringData) {
        setGatheringMapMarkers(gatheringData);
        setHiddenGatheringMaterialsId(
          gatheringData.map((material) => material.id)
        );
      }
    };

    filterGatheringData();
  }, [gatheringData]);

  const [hiddenGatheringMaterialsId, setHiddenGatheringMaterialsId] = useState<
    string[]
  >([]);

  useEffect(() => {
    setGatheringMapMarkers(
      gatheringData.filter(
        (material) => !hiddenGatheringMaterialsId.includes(material.id)
      )
    );
  }, [hiddenGatheringMaterialsId]);

  const changeGatheringMaterialVisibility = (materialId: string) => {
    hiddenGatheringMaterialsId.includes(materialId)
      ? setHiddenGatheringMaterialsId(
          hiddenGatheringMaterialsId.filter(
            (hiddenMaterialId) => hiddenMaterialId !== materialId
          )
        )
      : setHiddenGatheringMaterialsId([
          ...hiddenGatheringMaterialsId,
          materialId,
        ]);
  };

  const isGatheringMaterialHidden = (materialId: string) => {
    return hiddenGatheringMaterialsId.includes(materialId);
  };

  const [npcsData, npcsError, npcsIsLoading] = useFetch<NPCData>(
    `/data/npcs/${params.location}.json`
  );

  const [npcs, setNpcs] = useState<NPCData[]>([]);

  const [hiddenNpcTypes, setHiddenNpcTypes] = useState<string[]>([]);

  const changeNpcsTypeVisibility = (npcType: string) => {
    hiddenNpcTypes.includes(npcType)
      ? setHiddenNpcTypes(
          hiddenNpcTypes.filter((hiddenNpcType) => hiddenNpcType !== npcType)
        )
      : setHiddenNpcTypes([...hiddenNpcTypes, npcType]);
  };

  const [locationNpcTypes, setLocationNpcTypes] = useState<string[]>([]);

  useEffect(() => {
    npcsData && setNpcs(npcsData);
    npcsData &&
      setLocationNpcTypes(Array.from(new Set(npcsData.map((npc) => npc.type))));
  }, [npcsData]);

  useEffect(() => {
    setNpcs(npcsData.filter((npc) => !hiddenNpcTypes.includes(npc.type)));
  }, [hiddenNpcTypes]);

  const locationNpcTypesAscending = [...locationNpcTypes].sort(
    (a, b) => getNpcTypeWeight(a) - getNpcTypeWeight(b)
  );

  return (
    <>
      <MapSideBar
        essencetappingData={essencetappingMaterialsAscending}
        aethertapingData={aethertapingMaterialsAscending}
        locationNpcTypes={locationNpcTypesAscending}
        changeGatheringMaterialVisibility={changeGatheringMaterialVisibility}
        changeNpcsTypeVisibility={changeNpcsTypeVisibility}
        isGatheringMaterialHidden={isGatheringMaterialHidden}
        selectedFaction={params.faction}
        selectedLocation={params.location}
      />
      <Map
        gatheringMarkers={gatheringMapMarkers}
        npcsData={npcs}
        location={params.location}
        faction={params.faction}
      />
    </>
  );
}
