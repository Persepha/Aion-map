import { GatheringData } from "@/utils/locations/types";
import { NPCData } from "@/utils/npcs/types";

export interface MapSideBarProps {
  essencetappingData: GatheringData[];
  aethertapingData: GatheringData[];
  npcsData: NPCData[];
  locationNpcTypes: string[];
  changeGatheringMaterialVisibility(materialId: string): void;
  changeNpcsTypeVisibility(npcType: string): void;
  changeNpcVisibility(npcId: string): void;
  isGatheringMaterialHidden(materialId: string): boolean;
  isNpcTypeHidden(npcType: string): boolean;
  isNpcHidden(npcId: string): boolean;
  selectedFaction: string;
  selectedLocation: string;
}
