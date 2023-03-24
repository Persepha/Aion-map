import { NextPage } from "next";
import { NpcMarkerPopupProps } from "@/components/NpcMarkerPopup/NpcMarkerPopup.props";
import Image from "next/image";
import { MarkerPopupButton } from "@/components/UI/MarkerPopupButton";

export const NpcMarkerPopup: NextPage<NpcMarkerPopupProps> = ({ npc }) => {
  return (
    <article className="w-72 text-base text-white">
      <section className="flex items-center justify-center">
        <h2 className="text-xl font-bold">{npc.ru_name}</h2>
      </section>
      <Image
        src={`/images/npcs/${npc.id}.png`}
        alt={npc.id}
        height={300}
        width={300}
        className="my-2.5 rounded-md"
      />
      <section className="flex flex-col">
        <div className="mb-5 flex items-center gap-2">
          <Image
            src={`/images/npc_icons/${npc.type}.png`}
            alt={npc.type}
            height={60}
            width={50}
            className="transition duration-150 ease-in-out group-hover:scale-110"
          />
          <span className="flex flex-col">
            <span className="text-xl font-bold">{npc.ru_name}</span>
            <span className="text-neutral-500">{npc.name}</span>
          </span>
        </div>

        <span>
          <span className="text-neutral-400">Уровень: </span>
          <span className="text-lg font-bold">{npc.lvl}</span>
        </span>

        <span>
          <span className="text-neutral-400">ХП: </span>
          <span className="text-lg font-bold">{npc.hp}</span>
        </span>

        <span>
          <span className="text-neutral-400">Радиус агра: </span>
          <span className="text-lg font-bold">{npc.agr_radius}</span>
        </span>
      </section>

      <section className="relative my-2.5 rounded-md border border-slate-50/[0.06] p-2">
        <span className="flex pr-10 text-lg font-bold">
          {npc.ingameFindTip}
        </span>
        <button
          className="absolute right-1 top-1 inline-flex h-[30px] items-center justify-center rounded-md border border-slate-50/[0.06]
          bg-zinc-700 px-1 py-1 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-zinc-900"
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
      </section>

      <section className="flex gap-2">
        <MarkerPopupButton>
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
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </MarkerPopupButton>
        <MarkerPopupButton>
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
        </MarkerPopupButton>
        <MarkerPopupButton>
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
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </MarkerPopupButton>
      </section>
    </article>
  );
};
