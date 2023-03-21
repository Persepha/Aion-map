import { GatheringData } from "@/utils/locations/types";

export interface GatheringDisclosureProps {
  title: string;
  gatheringData: GatheringData[];
  changeGatheringMaterialVisibility(materialId: string): void;
  isGatheringMaterialHidden(materialId: string): boolean;
}
