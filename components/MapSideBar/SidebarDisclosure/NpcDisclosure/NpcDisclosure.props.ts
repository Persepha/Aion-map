import { NPCData } from "@/utils/npcs/types";

export interface NpcDisclosureProps {
  npcType: string;
  npcsData: NPCData[];
  changeNpcVisibility(npcId: string): void;
  changeNpcsTypeVisibility(npcType: string): void;
  isNpcHidden(npcId: string): boolean;
  isNpcTypeHidden(npcType: string): boolean;
}
