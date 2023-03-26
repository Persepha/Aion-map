import { NPCData } from "@/utils/npcs/types";

export interface NpcMarkerPopupProps {
  npc: NPCData;
  changeNpcVisibility(npcId: string): void;
}
