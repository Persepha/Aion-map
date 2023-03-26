import { GatheringData } from "@/utils/locations/types";

export interface GatheringMarkerPopupProps {
  material: GatheringData;
  changeGatheringMaterialVisibility(materialId: string): void;
}
