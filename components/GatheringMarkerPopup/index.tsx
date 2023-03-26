import { NextPage } from "next";
import { GatheringMarkerPopupProps } from "@/components/GatheringMarkerPopup/GatheringMarkerPopup.props";
import Image from "next/image";
import { MarkerPopupButton } from "@/components/UI/MarkerPopupButton";

export const GatheringMarkerPopup: NextPage<GatheringMarkerPopupProps> = ({
  material,
  changeGatheringMaterialVisibility,
}) => {
  return (
    <article className="w-72 text-base text-white">
      <div className="flex items-center gap-2">
        <Image
          src={`images/gathering/${material.nameIcon}.png`}
          alt={material.name}
          height={40}
          width={40}
          className="transition duration-150 ease-in-out group-hover:scale-110"
        />
        <span className="flex flex-col">
          <span className="text-xl font-bold">{material.ru_name}</span>
          <span className="text-neutral-400">{material.name}</span>
        </span>
      </div>

      <p>
        <span className="text-neutral-400">Уровень: </span>
        <span className="text-lg font-bold">{material.gathering_lvl}</span>
      </p>

      <section className="flex gap-2">
        <MarkerPopupButton
          onClick={() => {
            navigator.clipboard.writeText(material.ingame_coords);
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
        </MarkerPopupButton>
        <MarkerPopupButton
          onClick={() => changeGatheringMaterialVisibility(material.id)}
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
