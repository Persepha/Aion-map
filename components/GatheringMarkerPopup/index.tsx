import { NextPage } from "next";
import { GatheringMarkerPopupProps } from "@/components/GatheringMarkerPopup/GatheringMarkerPopup.props";
import Image from "next/image";

export const GatheringMarkerPopup: NextPage<GatheringMarkerPopupProps> = ({
  material,
}) => {
  return (
    <article className="w-72 text-base text-white">
      <div className="flex items-center gap-2">
        <Image
          src={`/images/gathering/${material.nameIcon}.png`}
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
    </article>
  );
};
