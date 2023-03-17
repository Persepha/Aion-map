"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export const MapSideBar = () => {
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
        className="fixed inset-y-0 left-0  w-96 -translate-x-full flex-col
          gap-5 overflow-hidden bg-black/50 p-6 transition-transform duration-300 ease-out
          data-[visible='true']:translate-x-0 supports-[backdrop-filter]:backdrop-blur-xl"
      >
        <ul>
          <li>
            <Link href={"/"}>
              <Image
                src="/images/aion_logo.png"
                alt="aion-logo"
                width="513"
                height="163"
                className="duration-300 ease-in-out hover:scale-105"
              />
            </Link>
          </li>
          <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-50" />
          <li>
            <Image
              src="/images/npc_hp_bars/normal.png"
              alt="normal_mon"
              width="272"
              height="79"
            />
          </li>
          <li>
            <div
              className="h-[90px] w-[284px] bg-[url('/images/npc_hp_bars/elite.png')] pl-[100px]
              pt-[32px] font-medium text-white"
            >
              <span className="shadow-md drop-shadow-md">Элитный именной</span>
            </div>
          </li>
          <li>
            <Image
              src="/images/npc_hp_bars/heroic.png"
              alt="heroic"
              width="378"
              height="91"
            />
          </li>
          <li>
            <Image
              src="/images/npc_hp_bars/legendary.png"
              alt="legendary_mob"
              width="392"
              height="108"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
