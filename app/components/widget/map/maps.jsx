// components/widget/map/LeafletMap.jsx
import React, { useState, useRef } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41], // Anchor the icon to the center bottom point
});
L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 10;
  const mapRef = useRef();
  const position = [-18.9241796, 47.5208008];

  return (
    <div className="h-72">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
        style={{ height: "100%", width: "100%" }}
      >
        <div>test</div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Micro-H</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
