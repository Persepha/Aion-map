import { MapCoordinate } from "@/utils/locations/types";

export interface NPCData {
  id: string;
  ingame_coords: string;
  type: string;
  lvl: number;
  hp: number;
  coords: MapCoordinate[];
  ru_name: string;
  name: string;
  db_link: string;
  agr_radius: string;
  ingameFindTip: string;
  core_coord: MapCoordinate;
}
