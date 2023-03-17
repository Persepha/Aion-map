"use client";

import { Map } from "@/components/Map";

export default function Page({ params }: { params: { location: string } }) {
  return <Map location={params.location} />;
}
