import { GatheringData, NPCData } from "@/utils/locations/types";

export interface MapProps {
  location: string;
  essencetappingData: GatheringData[];
  npcsData: NPCData[];
}
