import { NextPage } from "next";
import { FactionLocationsProps } from "@/components/FactionLocations/FactionLocations.props";
import Link from "next/link";
import { abyssLocationData } from "@/utils/locations/abyss/consts";

export const Abyss: NextPage<FactionLocationsProps> = ({
  setCurrentLocation,
  currentLocation,
}) => (
  <svg
    width="430"
    height="454"
    viewBox="0 0 430 454"
    xmlns="http://www.w3.org/2000/svg"
    className=" bg-[url('/images/abyss/abyss.png')] bg-left bg-no-repeat"
  >
    {abyssLocationData.map((location, index) => (
      <image
        key={index}
        href={`/images/abyss/${location.name}.png`}
        width={location.width}
        height={location.height}
        x={location.x}
        y={location.y}
        className={`transition-opacity duration-150 ease-in-out ${
          currentLocation === location.name ? "opacity-1" : "opacity-0"
        }`}
      />
    ))}

    {abyssLocationData.map((location, index) => (
      <Link
        key={index}
        href={`/abyss/${location.name}`}
        onMouseEnter={() => setCurrentLocation(location.name)}
        onMouseLeave={() => setCurrentLocation("")}
      >
        <path
          className="fill-transparent stroke-transparent"
          d={location.svgPath}
        ></path>
        <text
          key={index}
          x={location.textX}
          y={location.textY}
          className="fill-[#f4f7ad] text-xl font-bold shadow-black drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          {location.textName}
        </text>
      </Link>
    ))}
  </svg>
);
