export interface MapCoordinate {
  x: number;
  y: number;
}

export interface GatheringData {
  id: string;
  nameIcon: string;
  name: string;
  ru_name: string;
  gathering_type: string;
  gathering_lvl: number;
  coords: MapCoordinate[];
  ingame_coords: string;
}

export interface NPCData {
  id: string;
  ingame_coords: string;
  type: string;
  lvl: number;
  hp: number;
  coords: MapCoordinate[];
}

export enum LocationEnum {
  elysea = "Элиос",
  asmodae = "Асмодея",
  abyss = "Арэшурат",
  poeta = "Фоэта",
  verteron = "Бертрон",
  eltnen = "Элтенен",
  heiron = "Интердика",
  sanctum = "Элизиум",
  theobomos = "Теобомос",
  ishalgen = "Исхальген",
  altgard = "Альтгард",
  morheim = "Морхейм",
  beluslan = "Белуслан",
  brusthonin = "Брустхонин",
  pandaemonium = "Пандемониум",
  core = "Око",
  lower = "Нижний уровень",
  upper = "Верхний уровень",
}

export type LocationEnumType = keyof typeof LocationEnum;
