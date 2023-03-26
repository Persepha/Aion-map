"use client";

import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { MapSideBarProps } from "@/components/MapSideBar/MapSideBar.props";
import { GatheringDisclosure } from "@/components/MapSideBar/SidebarDisclosure/GatheringDisclosure";
import { FactionBreadcrumbs } from "@/components/FactionBreadcrumbs";
import { NpcDisclosure } from "@/components/MapSideBar/SidebarDisclosure/NpcDisclosure";

export const MapSideBar: NextPage<MapSideBarProps> = ({
  essencetappingData,
  aethertapingData,
  locationNpcTypes,
  changeGatheringMaterialVisibility,
  npcsData,
  isNpcTypeHidden,
  isNpcHidden,
  changeNpcVisibility,
  changeNpcsTypeVisibility,
  isGatheringMaterialHidden,
  selectedFaction,
  selectedLocation,
}) => {
  const [navVisibility, setNavVisibility] = useState<boolean>(true);

  return (
    <header className="relative inset-0 z-[9000] inline-block flex items-center justify-between">
      <section
        data-visible={navVisibility}
        className="absolute top-1 left-1 z-[9999] flex h-8 translate-x-0 items-center justify-center
        gap-1 transition-transform duration-300 ease-out data-[visible='true']:translate-x-96"
      >
        <button
          className="inline-flex h-8 w-8 justify-center rounded-md  border-transparent bg-black/50
          px-1 py-1 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-black/90
          supports-[backdrop-filter]:backdrop-blur-xl"
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

        <FactionBreadcrumbs
          faction={selectedFaction}
          location={selectedLocation}
        />
        <Link
          href={"/about"}
          className="text-white transition duration-150 ease-in-out
              hover:text-slate-400 focus:text-slate-400 active:text-amber-900"
        >
          <button
            className="inline-flex h-8 w-8 justify-center rounded-md  border-transparent bg-black/50
          px-1 py-1 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-black/90
          supports-[backdrop-filter]:backdrop-blur-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </button>
        </Link>
      </section>

      <nav
        id="sidenav"
        data-visible={navVisibility}
        className="fixed inset-y-0 left-0 flex w-96 -translate-x-full flex-col gap-5 overflow-y-auto
        border-r border-slate-50/[0.06] bg-black/50 p-4 transition-transform duration-300 ease-out
        data-[visible='true']:translate-x-0 supports-[backdrop-filter]:backdrop-blur-xl"
      >
        <Link href={"/"}>
          <Image
            src="images/aion_logo.png"
            alt="aion-logo"
            width="513"
            height="163"
            className=" p-2 duration-300 ease-in-out hover:scale-105"
          />
        </Link>

        <span className="w-full bg-neutral-100/30 p-[0.2px]"></span>

        <ul>
          {locationNpcTypes.map((npcType, index) => {
            return (
              <NpcDisclosure
                npcsData={npcsData}
                npcType={npcType}
                isNpcHidden={isNpcHidden}
                changeNpcVisibility={changeNpcVisibility}
                changeNpcsTypeVisibility={changeNpcsTypeVisibility}
                isNpcTypeHidden={isNpcTypeHidden}
                key={index}
              />
            );
          })}
        </ul>
        {essencetappingData.length > 0 && (
          <GatheringDisclosure
            gatheringData={essencetappingData}
            changeGatheringMaterialVisibility={
              changeGatheringMaterialVisibility
            }
            isGatheringMaterialHidden={isGatheringMaterialHidden}
            title="essencetaping"
          />
        )}

        {aethertapingData.length > 0 && (
          <GatheringDisclosure
            gatheringData={aethertapingData}
            changeGatheringMaterialVisibility={
              changeGatheringMaterialVisibility
            }
            isGatheringMaterialHidden={isGatheringMaterialHidden}
            title="aethertaping"
          />
        )}
      </nav>
    </header>
  );
};
