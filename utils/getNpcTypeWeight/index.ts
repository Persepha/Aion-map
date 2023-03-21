export const getNpcTypeWeight = (npcType: string) => {
  const npcTypes = ["normal_npc", "elite_npc", "heroic_npc", "legendary_npc"];
  return npcTypes.indexOf(npcType);
};
