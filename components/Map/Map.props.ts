import { GatheringData } from "@/utils/locations/types";
import { NPCData } from "@/utils/npcs/types";

export interface MapProps {
  location: string;
  faction: string;
  gatheringMarkers: GatheringData[];
  npcsData: NPCData[];
  changeGatheringMaterialVisibility(materialId: string): void;
  changeNpcVisibility(npcId: string): void;
  changeNpcFullSpawnInfoVisibility(npcId: string): void;
  isNpcFullSpawnInfo(npcId: string): boolean;
}
