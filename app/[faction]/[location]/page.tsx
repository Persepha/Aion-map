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

  const npcsAscending = [...npcsData].sort((a, b) => a.lvl - b.lvl);

  const [npcs, setNpcs] = useState<NPCData[]>([]);

  const [hiddenNpcsId, setHiddenNpcsId] = useState<string[]>([]);

  useEffect(() => {
    setNpcs(npcsData.filter((npc) => !hiddenNpcsId.includes(npc.id)));
  }, [hiddenNpcsId]);

  const changeNpcVisibility = (npcId: string) => {
    hiddenNpcsId.includes(npcId)
      ? setHiddenNpcsId(
          hiddenNpcsId.filter((hiddenNpcsId) => hiddenNpcsId !== npcId)
        )
      : setHiddenNpcsId([...hiddenNpcsId, npcId]);
  };

  const isNpcHidden = (npcId: string) => {
    return hiddenNpcsId.includes(npcId);
  };

  const isNpcTypeHidden = (npcType: string) => {
    return !npcs.filter((npc) => npc.type === npcType).length;
  };

  const [npcsIdFullSpawnInfo, setNpcsIdFullSpawnInfo] = useState<string[]>([]);

  const isNpcFullSpawnInfo = (npcId: string) => {
    return npcsIdFullSpawnInfo.includes(npcId);
  };

  const changeNpcFullSpawnInfoVisibility = (npcId: string) => {
    npcsIdFullSpawnInfo.includes(npcId)
      ? setNpcsIdFullSpawnInfo(
          npcsIdFullSpawnInfo.filter(
            (npcFullSpawnId) => npcFullSpawnId !== npcId
          )
        )
      : setNpcsIdFullSpawnInfo([...npcsIdFullSpawnInfo, npcId]);
  };

  const changeNpcsTypeVisibility = (npcType: string) => {
    // if there are no npcs of the selected npcType
    // then show all npcs of the selected npcType
    // otherwise, hide all selected npcs of the selected npcType
    if (!npcs.filter((npc) => npc.type === npcType).length) {
      const hiddenTypeIds = npcsData
        .filter((npc) => npc.type === npcType)
        .map((npc) => npc.id);

      setHiddenNpcsId(
        hiddenNpcsId.filter((npcId) => !hiddenTypeIds.includes(npcId))
      );
    } else {
      setHiddenNpcsId([
        ...hiddenNpcsId,
        ...npcsData
          .filter(
            (npc) => npc.type === npcType && !hiddenNpcsId.includes(npc.id)
          )
          .map((npc) => npc.id),
      ]);
    }
  };

  const [locationNpcTypes, setLocationNpcTypes] = useState<string[]>([]);

  useEffect(() => {
    npcsData && setNpcs(npcsData);
    npcsData &&
      setLocationNpcTypes(Array.from(new Set(npcsData.map((npc) => npc.type))));
  }, [npcsData]);

  const locationNpcTypesAscending = [...locationNpcTypes].sort(
    (a, b) => getNpcTypeWeight(a) - getNpcTypeWeight(b)
  );

  return (
    <>
      <MapSideBar
        essencetappingData={essencetappingMaterialsAscending}
        aethertapingData={aethertapingMaterialsAscending}
        npcsData={npcsAscending}
        locationNpcTypes={locationNpcTypesAscending}
        changeGatheringMaterialVisibility={changeGatheringMaterialVisibility}
        changeNpcsTypeVisibility={changeNpcsTypeVisibility}
        changeNpcVisibility={changeNpcVisibility}
        isGatheringMaterialHidden={isGatheringMaterialHidden}
        isNpcTypeHidden={isNpcTypeHidden}
        isNpcHidden={isNpcHidden}
        selectedFaction={params.faction}
        selectedLocation={params.location}
      />
      <Map
        gatheringMarkers={gatheringMapMarkers}
        npcsData={npcs}
        location={params.location}
        faction={params.faction}
        changeNpcVisibility={changeNpcVisibility}
        changeGatheringMaterialVisibility={changeGatheringMaterialVisibility}
        changeNpcFullSpawnInfoVisibility={changeNpcFullSpawnInfoVisibility}
        isNpcFullSpawnInfo={isNpcFullSpawnInfo}
      />
    </>
  );
}
