import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextPage } from "next";
import { NpcDisclosureProps } from "@/components/MapSideBar/SidebarDisclosure/NpcDisclosure/NpcDisclosure.props";
import { npcData } from "@/utils/npcs/consts";

export const NpcDisclosure: NextPage<NpcDisclosureProps> = ({
  npcsData,
  npcType,
  isNpcHidden,
  changeNpcVisibility,
  changeNpcsTypeVisibility,
  isNpcTypeHidden,
}) => {
  let npcTypeHpBar = "";

  switch (npcType) {
    case "normal_npc":
      npcTypeHpBar = "bg-[url('/Aion-map/images/npc_hp_bars/normal_npc.png')]";
      break;
    case "elite_npc":
      npcTypeHpBar = "bg-[url('/Aion-map/images/npc_hp_bars/elite_npc.png')]";
      break;
    case "heroic_npc":
      npcTypeHpBar = "bg-[url('/Aion-map/images/npc_hp_bars/heroic_npc.png')]";
      break;
    case "legendary_npc":
      npcTypeHpBar =
        "bg-[url('/Aion-map/images/npc_hp_bars/legendary_npc.png')]";
      break;
  }

  return (
    <Disclosure>
      <Disclosure.Button
        className={`group flex items-center gap-4 pt-2 ${
          isNpcTypeHidden(npcType) ? "opacity-25" : ""
        }`}
      >
        <Image
          src={`images/npc_icons/${npcType}.png`}
          alt={npcType}
          width={npcData[npcType as keyof typeof npcData].width}
          height={npcData[npcType as keyof typeof npcData].height}
        />
        <div
          className={`flex h-[100px] w-[272px]
                    justify-center transition duration-150 ease-in-out ${npcTypeHpBar}
                    bg-contain bg-center bg-no-repeat font-medium text-white group-hover:scale-105`}
        >
          <span className="ml-8 capitalize drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {npcData[npcType as keyof typeof npcData].name}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transform duration-100 ui-open:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="flex flex-col gap-2 px-4 ">
          <div className="flex items-center justify-center">
            <button
              className="focus-visible:ring-zing-300 group flex w-fit items-center justify-center gap-2 rounded-md
              border border-slate-50/[0.06] bg-zinc-700 bg-zinc-700 p-2 text-lg font-medium text-white
              hover:border-slate-50/[0.12] hover:bg-zinc-900 focus:outline-none focus-visible:ring
              focus-visible:ring-opacity-75"
              onClick={() => changeNpcsTypeVisibility(npcType)}
            >
              <Image
                src={`images/npc_icons/${npcType}.png`}
                alt={npcType}
                width={30}
                height={30}
                className="transition duration-150 ease-in-out group-hover:scale-105"
              />
              {isNpcTypeHidden(npcType) ? "Показать всех" : "Скрыть всех"}
            </button>
          </div>
          {npcsData
            .filter((npc) => npc.type === npcType)
            .map((npc) => (
              <div key={npc.id} className="flex items-center gap-2">
                <button
                  className="inline-flex h-[30px] items-center justify-center rounded-md border border-slate-50/[0.06]
          bg-zinc-700 px-1 py-1 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900"
                  onClick={() => {
                    navigator.clipboard.writeText(npc.ingame_coords);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </button>
                <button
                  onClick={() => changeNpcVisibility(npc.id)}
                  className={`group flex  gap-2 rounded-md  hover:bg-zinc-700 ${
                    isNpcHidden(npc.id) ? "opacity-25" : ""
                  }`}
                >
                  <div className="text-left text-lg text-slate-200">
                    <span className="text-neutral-500">ур. </span>
                    <span>{`${npc.lvl} - ${npc.ru_name}`}</span>
                  </div>
                </button>
              </div>
            ))}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};
