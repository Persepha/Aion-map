import { GatheringData } from "@/utils/locations/types";
import { NPCData } from "@/utils/npcs/types";

export interface MapProps {
  location: string;
  faction: string;
  gatheringMarkers: GatheringData[];
  npcsData: NPCData[];
}
