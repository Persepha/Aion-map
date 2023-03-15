"use client";

import { useState } from "react";

import Link from "next/link";
import { elyosLocationData } from "@/utils/locations/elysea/consts";
import { usePathname } from "next/navigation";
import { FactionBreadcrumbs } from "@/components/FactionBreadcrumbs";

export default function Elyos() {
  const path = usePathname();

  const [currentLocation, setCurrentLocation] = useState<string>("");

  return (
    <main className="flex h-full flex-col bg-black/60  bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat bg-blend-darken">
      <section className="flex items-center justify-center">
        <FactionBreadcrumbs faction={path.replaceAll("/", "")} />
      </section>

      <section className="flex grow items-center justify-center overflow-auto">
        <div className="overflow-auto">
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
              </Link>
            ))}
          </svg>
        </div>
      </section>
    </main>
  );
}
