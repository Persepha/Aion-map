import { GatheringData, NPCData } from "@/utils/locations/types";

export interface MapProps {
  location: string;
  faction: string;
  essencetappingData: GatheringData[];
  npcsData: NPCData[];
}
