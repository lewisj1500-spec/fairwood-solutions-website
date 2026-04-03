"use client";
import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const OFFICE = { name: "Fairwood Solutions — Carmarthen", lat: 51.8559, lng: -4.3121 };

const TOWNS = [
  { name: "Llanelli",      lat: 51.6838, lng: -4.1635 },
  { name: "Swansea",       lat: 51.6214, lng: -3.9436 },
  { name: "Neath",         lat: 51.6614, lng: -3.8076 },
  { name: "Bridgend",      lat: 51.5059, lng: -3.5766 },
  { name: "Haverfordwest", lat: 51.8018, lng: -4.9719 },
  { name: "Pembroke",      lat: 51.6739, lng: -4.9160 },
  { name: "Tenby",         lat: 51.6698, lng: -4.7018 },
  { name: "Cardigan",      lat: 52.0820, lng: -4.6590 },
  { name: "Lampeter",      lat: 52.1153, lng: -4.0796 },
  { name: "Llandovery",    lat: 51.9949, lng: -3.7966 },
  { name: "Llandeilo",     lat: 51.8833, lng: -3.9833 },
  { name: "Ammanford",     lat: 51.7957, lng: -3.9939 },
  { name: "Aberystwyth",   lat: 52.4153, lng: -4.0829 },
  { name: "Brecon",        lat: 51.9461, lng: -3.3906 },
  { name: "Cardiff",       lat: 51.4816, lng: -3.1791 },
  { name: "Newport",       lat: 51.5842, lng: -2.9977 },
  { name: "Merthyr Tydfil",lat: 51.7474, lng: -3.3771 },
  { name: "Bristol",       lat: 51.4545, lng: -2.5879 },
  { name: "Bath",          lat: 51.3811, lng: -2.3590 },
];

function FitWales() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds([[50.9, -5.5], [52.55, -2.0]], { padding: [40, 40] });
  }, [map]);
  return null;
}

export default function MapClient() {
  const officeIcon = L.divIcon({
    html: `
      <div style="position:relative;width:20px;height:20px;display:flex;align-items:center;justify-content:center;">
        <div style="position:absolute;width:38px;height:38px;border-radius:50%;border:1.5px solid rgba(0,230,118,0.5);animation:fw-pulse 2.2s ease-out infinite;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
        <div style="position:absolute;width:26px;height:26px;border-radius:50%;border:1.5px solid rgba(0,230,118,0.35);animation:fw-pulse 2.2s ease-out 0.7s infinite;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
        <div style="width:14px;height:14px;background:#00e676;border-radius:50%;border:2.5px solid rgba(255,255,255,0.2);box-shadow:0 0 20px rgba(0,230,118,0.75),0 0 8px rgba(0,230,118,0.5);"></div>
      </div>
    `,
    className: "",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -14],
  });

  return (
    <MapContainer
      center={[51.95, -4.2]}
      zoom={8}
      style={{ height: "100%", width: "100%", background: "#030804" }}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <FitWales />

      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={19}
      />

      {/* Outer dashed coverage boundary — Bristol & South West */}
      <Circle
        center={[51.97, -4.18]}
        radius={150000}
        pathOptions={{
          color: "#00e676",
          fillColor: "#00e676",
          fillOpacity: 0.03,
          weight: 1,
          opacity: 0.25,
          dashArray: "8 8",
        }}
      />

      {/* Inner primary coverage fill — all of South Wales */}
      <Circle
        center={[51.97, -4.18]}
        radius={112000}
        pathOptions={{
          color: "#00e676",
          fillColor: "#00e676",
          fillOpacity: 0.07,
          weight: 1.5,
          opacity: 0.45,
        }}
      />

      {/* Town markers */}
      {TOWNS.map((t) => (
        <CircleMarker
          key={t.name}
          center={[t.lat, t.lng]}
          radius={5}
          pathOptions={{
            color: "#00e676",
            fillColor: "#00e676",
            fillOpacity: 0.75,
            weight: 1,
            opacity: 0.35,
          }}
        >
          <Popup>
            <div className="fw-popup">
              <p className="fw-popup-name">{t.name}</p>
              <p className="fw-popup-tag">EPC Coverage Area</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}

      {/* Office pulsing marker */}
      <Marker position={[OFFICE.lat, OFFICE.lng]} icon={officeIcon}>
        <Popup>
          <div className="fw-popup">
            <p className="fw-popup-name">Fairwood Solutions</p>
            <p className="fw-popup-tag fw-popup-office">Assessment HQ — Carmarthen</p>
          </div>
        </Popup>
      </Marker>

      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
