import { GatheringData } from "@/utils/locations/types";

export interface MapSideBarProps {
  essencetappingData: GatheringData[];
  changeGatheringMaterialVisibility(materialId: string): void;
  isGatheringMaterialHidden(materialId: string): boolean;
}
