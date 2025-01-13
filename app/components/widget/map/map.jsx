import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


var myIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
});

export default function Map() {
useEffect(() => {
    console.log("ici");
    var container = L.DomUtil.get("map");

    if (container != null) {
        container._leaflet_id = null;
    }
    var map = L.map("map").setView([-18.906686, 47.506002], 13);
    L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
        "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
    }
    ).addTo(map);
}, []);
return <div id="map" style={{ height: "40vh" }}></div>;
}   