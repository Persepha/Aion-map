import { NextPage } from "next";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet, { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { MapProps } from "@/components/Map/Map.props";

export const Map: NextPage<MapProps> = ({ location, essencetappingData }) => {
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
          noWrap={true}
          attribution="Aion map"
          url={`/images/elysea/${location}/{z}/{x}_{y}.png`}
        />

        {essencetappingData.map((material, i) =>
          material.coords.map((material_coords) => (
            <Marker
              key={material_coords.x + i + material_coords.y}
              position={[material_coords.x, material_coords.y]}
              icon={Leaflet.icon({
                iconUrl: `/images/gathering/${material.name}.png`,
                iconSize: [40, 40],
              })}
            >
              <Popup>
                {material_coords.x} {material_coords.y} <br /> Easily
                customizable.
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </section>
  );
};
