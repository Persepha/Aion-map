import { GatheringData, NPCData } from "@/utils/locations/types";

export interface MapProps {
  location: string;
  faction: string;
  gatheringMarkers: GatheringData[];
  npcsData: NPCData[];
}
