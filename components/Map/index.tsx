import { NextPage } from "next";

import { MapContainer, TileLayer } from "react-leaflet";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";

import { MapProps } from "@/components/Map/Map.props";

export const Map: NextPage<MapProps> = ({ location }) => {
  return (
    <section className="z-[1000] h-full w-full">
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
          attribution="Aion map"
          url={`/images/elysea/${location}/{z}/{x}_{y}.png`}
        />
      </MapContainer>
    </section>
  );
};
