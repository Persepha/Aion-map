import { elyosLocationData } from "@/utils/locations/elysea/consts";
import Link from "next/link";
import { NextPage } from "next";
import { FactionLocationsProps } from "@/components/FactionLocations/FactionLocations.props";

export const Elysea: NextPage<FactionLocationsProps> = ({
  setCurrentLocation,
  currentLocation,
}) => (
  <svg
    width="768"
    height="608"
    viewBox="0 0 768 608"
    xmlns="http://www.w3.org/2000/svg"
    className=" bg-[url('/images/elysea/elyos_map.png')] bg-left bg-no-repeat"
  >
    {elyosLocationData.map((location, index) => (
      <image
        key={index}
        href={`/images/elysea/${location.name}.png`}
        width={location.width}
        height={location.height}
        x={location.x}
        y={location.y}
        className={`transition-opacity duration-150 ease-in-out ${
          currentLocation === location.name ? "opacity-1" : "opacity-0"
        }`}
      />
    ))}

    {elyosLocationData.map((location, index) => (
      <Link
        key={index}
        href={`/elysea/${location.name}`}
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
