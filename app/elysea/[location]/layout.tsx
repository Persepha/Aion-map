import React from "react";
import { MapSideBar } from "@/components/MapSideBar";

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MapSideBar />
      {children}
    </>
  );
}
