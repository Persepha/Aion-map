"use client";

import { useState } from "react";
import { FactionBreadcrumbs } from "@/components/FactionBreadcrumbs";
import { Elysea } from "@/components/FactionLocations/Elysea";
import { Abyss } from "@/components/FactionLocations/Abyss";
import { Asmodae } from "@/components/FactionLocations/Asmodae";

export default function FactionPage({
  params,
}: {
  params: { faction: string };
}) {
  const [currentLocation, setCurrentLocation] = useState<string>("");

  const factionLocationSelector = () => {
    switch (params.faction) {
      case "elysea":
        return (
          <Elysea
            setCurrentLocation={setCurrentLocation}
            currentLocation={currentLocation}
          />
        );
      case "asmodae":
        return (
          <Asmodae
            setCurrentLocation={setCurrentLocation}
            currentLocation={currentLocation}
          />
        );
      case "abyss":
        return (
          <Abyss
            setCurrentLocation={setCurrentLocation}
            currentLocation={currentLocation}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex h-full flex-col bg-black/60  bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat bg-blend-darken">
      <section className="flex items-center justify-center">
        <FactionBreadcrumbs faction={params.faction} />
      </section>

      <section className="flex grow items-center justify-center overflow-auto">
        <div className="overflow-auto">{factionLocationSelector()}</div>
      </section>
    </main>
  );
}
