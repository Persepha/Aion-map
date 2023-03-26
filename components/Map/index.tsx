import { NextPage } from "next";

import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  ZoomControl,
  Tooltip,
} from "react-leaflet";
import Leaflet, { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { MapProps } from "@/components/Map/Map.props";
import { GatheringMarkerPopup } from "@/components/GatheringMarkerPopup";
import { NpcMarkerPopup } from "@/components/NpcMarkerPopup";
import { MarkerTooiltip } from "@/components/MarkerTooiltip";
import { Fragment } from "react";

export const Map: NextPage<MapProps> = ({
  location,
  faction,
  gatheringMarkers,
  npcsData,
  changeNpcVisibility,
  changeGatheringMaterialVisibility,
  isNpcFullSpawnInfo,
  changeNpcFullSpawnInfoVisibility,
}) => {
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
          [40, 60],
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
          url={`/images/${faction}/${location}/{z}/{x}_{y}.png`}
        />
        <ZoomControl position="bottomright" />
        {/*<Marker position={[-11.6, 44.2]}></Marker>*/}
        {gatheringMarkers.map((material, i) =>
          material.coords.map((material_coords) => (
            <Marker
              key={material_coords.x + i + material_coords.y}
              position={[material_coords.x, material_coords.y]}
              icon={Leaflet.icon({
                iconUrl: `/images/gathering/${material.nameIcon}.png`,
                iconSize: [40, 40],
              })}
            >
              <Popup>
                <GatheringMarkerPopup
                  material={material}
                  changeGatheringMaterialVisibility={
                    changeGatheringMaterialVisibility
                  }
                />
                <p className="text-white">
                  {material_coords.x} {material_coords.y}
                </p>
              </Popup>
              <Tooltip>
                <MarkerTooiltip title={material.ru_name} />
              </Tooltip>
            </Marker>
          ))
        )}
        {/*{npcsData.map((npc) => (*/}
        {/*  <Marker*/}
        {/*    key={npc.id}*/}
        {/*    position={[npc.core_coord.x, npc.core_coord.y]}*/}
        {/*    icon={Leaflet.icon({*/}
        {/*      iconUrl: `/images/npc_icons/${npc.type}.png`,*/}
        {/*      iconSize: [40, 40],*/}
        {/*    })}*/}
        {/*  >*/}
        {/*    <Popup>*/}
        {/*      <NpcMarkerPopup*/}
        {/*        changeNpcVisibility={changeNpcVisibility}*/}
        {/*        npc={npc}*/}
        {/*      />*/}
        {/*    </Popup>*/}
        {/*    <Tooltip>*/}
        {/*      <MarkerTooiltip title={npc.ru_name} />*/}
        {/*    </Tooltip>*/}
        {/*  </Marker>*/}
        {/*))}*/}
        {npcsData.map((npc) => {
          if (!isNpcFullSpawnInfo(npc.id)) {
            return (
              <Marker
                key={npc.id}
                position={[npc.core_coord.x, npc.core_coord.y]}
                icon={Leaflet.icon({
                  iconUrl: `/images/npc_icons/${npc.type}.png`,
                  iconSize: [40, 40],
                })}
              >
                <Popup>
                  <NpcMarkerPopup
                    changeNpcVisibility={changeNpcVisibility}
                    changeNpcFullSpawnInfoVisibility={
                      changeNpcFullSpawnInfoVisibility
                    }
                    npc={npc}
                  />
                </Popup>
                <Tooltip>
                  <MarkerTooiltip title={npc.ru_name} />
                </Tooltip>
              </Marker>
            );
          }

          return npc.coords.map((npc_coord, i) => (
            <Fragment key={npc_coord.x + i + npc_coord.y}>
              <Marker
                position={[npc_coord.x, npc_coord.y]}
                icon={Leaflet.icon({
                  iconUrl: `/images/npc_icons/${npc.type}.png`,
                  iconSize: [40, 40],
                })}
              >
                <Popup>
                  <NpcMarkerPopup
                    changeNpcVisibility={changeNpcVisibility}
                    changeNpcFullSpawnInfoVisibility={
                      changeNpcFullSpawnInfoVisibility
                    }
                    npc={npc}
                  />
                </Popup>
                <Tooltip>
                  <MarkerTooiltip title={npc.ru_name} />
                </Tooltip>
              </Marker>
              <Polyline
                positions={[
                  [npc.core_coord.x, npc.core_coord.y],
                  [npc_coord.x, npc_coord.y],
                ]}
                pathOptions={{ color: "lime", opacity: 0.2 }}
              />
            </Fragment>
          ));
          // if (isNpcFullSpawnInfo(npc.id)) {
          //   npc.coords.map((npc_coord, i) => (
          //     <Marker
          //       key={npc_coord.x + i + npc_coord.y}
          //       position={[npc_coord.x, npc_coord.y]}
          //       icon={Leaflet.icon({
          //         iconUrl: `/images/npc_icons/${npc.type}.png`,
          //         iconSize: [40, 40],
          //       })}
          //     >
          //       <Popup>
          //         <NpcMarkerPopup
          //           changeNpcVisibility={changeNpcVisibility}
          //           npc={npc}
          //         />
          //       </Popup>
          //       <Tooltip>
          //         <MarkerTooiltip title={npc.ru_name} />
          //       </Tooltip>
          //     </Marker>
          //   ));
        })}
        ;{/*{npcsData.map((npc) =>*/}
        {/*  npc.coords.map((npc_coord, i) => (*/}
        {/*    <Marker*/}
        {/*      key={npc_coord.x + i + npc_coord.y}*/}
        {/*      position={[npc_coord.x, npc_coord.y]}*/}
        {/*      icon={Leaflet.icon({*/}
        {/*        iconUrl: `/images/npc_icons/${npc.type}.png`,*/}
        {/*        iconSize: [40, 40],*/}
        {/*      })}*/}
        {/*    >*/}
        {/*      <Popup>*/}
        {/*        <NpcMarkerPopup*/}
        {/*          changeNpcVisibility={changeNpcVisibility}*/}
        {/*          npc={npc}*/}
        {/*        />*/}
        {/*      </Popup>*/}
        {/*      <Tooltip>*/}
        {/*        <MarkerTooiltip title={npc.ru_name} />*/}
        {/*      </Tooltip>*/}
        {/*    </Marker>*/}
        {/*  ))*/}
        {/*)}*/}
        {/*{npcsData.map((npc) =>*/}
        {/*  npc.coords.map((npc_coord, i) => (*/}
        {/*    <Polyline*/}
        {/*      key={npc.core_coord.x + i + npc.core_coord.y}*/}
        {/*      positions={[*/}
        {/*        [npc.core_coord.x, npc.core_coord.y],*/}
        {/*        [npc_coord.x, npc_coord.y],*/}
        {/*      ]}*/}
        {/*      pathOptions={{ color: "lime", opacity: 0.2 }}*/}
        {/*    />*/}
        {/*  ))*/}
        {/*)}*/}
      </MapContainer>
    </section>
  );
};
