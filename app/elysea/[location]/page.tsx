"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Page({ params }: { params: { location: string } }) {
  return (
    <MapContainer
      preferCanvas={true}
      center={[-24, 24]}
      zoom={4}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
      crs={CRS.Simple}
      maxBounds={[
        [-60, -20],
        [20, 60],
      ]}
      minZoom={4}
      maxZoom={7}
    >
      <TileLayer
        bounds={[
          [-48, 0],
          [0, 48],
        ]}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`/images/elysea/${params.location}/{z}/{x}_{y}.png`}
      />
    </MapContainer>
  );
}
