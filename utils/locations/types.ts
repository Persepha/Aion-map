export interface MapCoordinate {
  x: number;
  y: number;
}

export interface GatheringData {
  id: string;
  name: string;
  gathering_type: string;
  gathering_lvl: number;
  coords: MapCoordinate[];
  ingame_coords: string;
}