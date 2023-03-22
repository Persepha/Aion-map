import { GatheringData } from "@/utils/locations/types";

export interface MapSideBarProps {
  essencetappingData: GatheringData[];
  locationNpcTypes: string[];
  changeGatheringMaterialVisibility(materialId: string): void;
  changeNpcsTypeVisibility(npcType: string): void;
  isGatheringMaterialHidden(materialId: string): boolean;
  selectedFaction: string;
  selectedLocation: string;
}
