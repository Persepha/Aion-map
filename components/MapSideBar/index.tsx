"use client";

import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { MapSideBarProps } from "@/components/MapSideBar/MapSideBar.props";
import { GatheringDisclosure } from "@/components/MapSideBar/SidebarDisclosure/GatheringDisclosure";

export const MapSideBar: NextPage<MapSideBarProps> = ({
  essencetappingData,
  locationNpcTypes,
  changeGatheringMaterialVisibility,
  changeNpcsTypeVisibility,
  isGatheringMaterialHidden,
}) => {
  const [navVisibility, setNavVisibility] = useState<boolean>(false);

  return (
    <header className="relative inset-0 z-[9000] inline-block flex items-center justify-between">
      <button
        className="absolute top-1 left-1 z-[9999] inline-flex h-8 w-8 justify-center rounded-md  border-transparent
          bg-zinc-700 px-1 py-1 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900"
        aria-expanded={navVisibility}
        aria-controls="#sidenav"
        aria-haspopup="true"
        onClick={() => {
          setNavVisibility(!navVisibility);
        }}
      >
        {navVisibility ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>
      <nav
        id="sidenav"
        data-visible={navVisibility}
        className="fixed inset-y-0 left-0 flex w-96 -translate-x-full flex-col gap-5 overflow-y-auto  border-r border-slate-50/[0.06]
          bg-black/50 p-4 transition-transform duration-300 ease-out
          data-[visible='true']:translate-x-0 supports-[backdrop-filter]:backdrop-blur-xl"
      >
        <Link href={"/"}>
          <Image
            src="/images/aion_logo.png"
            alt="aion-logo"
            width="513"
            height="163"
            className=" p-2 duration-300 ease-in-out hover:scale-105"
          />
        </Link>
        <span className="w-full bg-neutral-100/50 p-[0.2px]"></span>
        <ul>
          {locationNpcTypes.map((npcType, index) => {
            let npcTypeHpBar = "";
            switch (npcType) {
              case "normal_npc":
                npcTypeHpBar = "bg-[url('/images/npc_hp_bars/normal_npc.png')]";
                break;
              case "elite_npc":
                npcTypeHpBar = "bg-[url('/images/npc_hp_bars/elite_npc.png')]";
                break;
              case "heroic_npc":
                npcTypeHpBar = "bg-[url('/images/npc_hp_bars/heroic_npc.png')]";
                break;
              case "legendary_npc":
                npcTypeHpBar =
                  "bg-[url('/images/npc_hp_bars/legendary_npc.png')]";
                break;
            }
            return (
              <li key={index}>
                <button
                  className="group flex items-center gap-4"
                  onClick={() => changeNpcsTypeVisibility(npcType)}
                >
                  <Image
                    src={`/images/npc_icons/${npcType}.png`}
                    alt={npcType}
                    width={50}
                    height={57}
                  />
                  <div
                    className={`flex h-[100px] w-[272px]
                justify-center transition duration-150 ease-in-out ${npcTypeHpBar}
                bg-contain bg-center bg-no-repeat font-medium text-white group-hover:scale-105`}
                  >
                    <span className="ml-4 mt-2 capitalize drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      {npcType}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
        <GatheringDisclosure
          gatheringData={essencetappingData}
          changeGatheringMaterialVisibility={changeGatheringMaterialVisibility}
          isGatheringMaterialHidden={isGatheringMaterialHidden}
          title="essencetaping"
        />
        <GatheringDisclosure
          gatheringData={essencetappingData}
          changeGatheringMaterialVisibility={changeGatheringMaterialVisibility}
          isGatheringMaterialHidden={isGatheringMaterialHidden}
          title="aethertaping"
        />
      </nav>
    </header>
  );
};
