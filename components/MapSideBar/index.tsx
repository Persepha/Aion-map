"use client";

import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Disclosure, Transition } from "@headlessui/react";

import { MapSideBarProps } from "@/components/MapSideBar/MapSideBar.props";

export const MapSideBar: NextPage<MapSideBarProps> = ({
  essencetappingData,
  changeGatheringMaterialVisibility,
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
        className="fixed inset-y-0 left-0 flex w-96 -translate-x-full flex-col gap-5
          overflow-y-auto bg-black/50 p-4 transition-transform duration-300 ease-out
          data-[visible='true']:translate-x-0 supports-[backdrop-filter]:backdrop-blur-xl"
      >
        <Link href={"/"}>
          <Image
            src="/images/aion_logo.png"
            alt="aion-logo"
            width="513"
            height="163"
            className="duration-300 ease-in-out hover:scale-105"
          />
        </Link>
        <ul>
          <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-50" />
          <li>
            <button className="g-2 group flex items-center">
              <Image
                src="/images/npc_icons/normal_npc.png"
                alt="normal_npc"
                width={50}
                height={53}
                className="group-transition group-duration-300 group-ease-in-out group-hover:scale-105"
              />
              <Image
                src="/images/npc_hp_bars/normal.png"
                alt="normal_mon"
                width="272"
                height="79"
              />
            </button>
          </li>
          <li>
            <button className="g-2 group flex items-center">
              <Image
                src="/images/npc_icons/elite_npc.png"
                alt="elite_npc"
                width={50}
                height={48}
                className="group-transition group-duration-300 group-ease-in-out group-hover:scale-105"
              />
              <div
                className="h-[90px] w-[272px] bg-[url('/images/npc_hp_bars/elite.png')] bg-contain
                bg-center bg-no-repeat pl-[50px] pt-[32px] font-medium text-white"
              >
                <span className="shadow-md drop-shadow-md">
                  Элитный именной
                </span>
              </div>
            </button>
          </li>
          <li>
            <button className="g-2 group flex items-center">
              <Image
                src="/images/npc_icons/heroic_npc.png"
                alt="heroic_npc"
                width={50}
                height={57}
                className="group-transition group-duration-300 group-ease-in-out group-hover:scale-105"
              />
              <div
                className="h-[91px] w-[272px] bg-[url('/images/npc_hp_bars/heroic.png')] bg-contain
                bg-center bg-no-repeat pl-[10px] pt-[32px] font-medium text-white"
              >
                <span className="shadow-md drop-shadow-md">Героический рб</span>
              </div>
            </button>
          </li>
          <li>
            <button className="g-2 group flex items-center">
              <Image
                src="/images/npc_icons/legendary_npc.png"
                alt="legendary_npc"
                width={50}
                height={57}
                className="group-transition group-duration-300 group-ease-in-out group-hover:scale-105"
              />
              <div
                className="h-[108px] w-[272px] bg-[url('/images/npc_hp_bars/legendary.png')] bg-contain
                bg-center bg-no-repeat pl-[20px] pt-[40px] font-medium text-white"
              >
                <span className="shadow-md drop-shadow-md">Легендарный рб</span>
              </div>
            </button>
          </li>
        </ul>
        <Disclosure>
          <Disclosure.Button
            className="flex w-full items-center justify-between rounded-lg bg-purple-100 px-4 py-2 text-left
          text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none
          focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>Энергокинез</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ui-open:rotate-180 ui-open:transform ui-open:duration-100"
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
            <Disclosure.Panel className="flex flex-col gap-2 px-2 ">
              {essencetappingData.map((resource) => (
                <div key={resource.id} className="flex gap-2">
                  <button
                    className="inline-flex h-[40px]  justify-center rounded-md  border-transparent
          bg-zinc-700 px-1 py-1 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900"
                  >
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
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect
                        x="8"
                        y="2"
                        width="8"
                        height="4"
                        rx="1"
                        ry="1"
                      ></rect>
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      changeGatheringMaterialVisibility(resource.id)
                    }
                    className={`flex items-center  gap-2 ${
                      isGatheringMaterialHidden(resource.id) ? "opacity-25" : ""
                    }`}
                  >
                    <Image
                      src={`/images/gathering/${resource.name}.png`}
                      alt={resource.name}
                      height={40}
                      width={40}
                      className="transition duration-300 ease-in-out hover:scale-105"
                    />

                    <span
                      className={`text-lg text-slate-200 ${
                        isGatheringMaterialHidden(resource.id)
                          ? "line-through"
                          : ""
                      }`}
                    >{`${resource.gathering_lvl} - ${resource.name}`}</span>
                  </button>
                </div>
              ))}
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      </nav>
    </header>
  );
};
