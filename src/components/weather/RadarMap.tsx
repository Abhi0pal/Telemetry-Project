/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// RainViewer API constants
const RAINVIEWER_API = "https://api.rainviewer.com/public/weather-maps.json";

interface RainViewerData {
  version: string;
  generated: number;
  host: string;
  radar: {
    past: { time: number; path: string }[];
    nowcast: { time: number; path: string }[];
  };
}

const RadarOverlay = () => {
  const map = useMap();
  const [radarLayer, setRadarLayer] = useState<L.TileLayer | null>(null);
  const [timestamp, setTimestamp] = useState<number | null>(null);

  useEffect(() => {
    const fetchRadarData = async () => {
      try {
        const response = await fetch(RAINVIEWER_API);
        const data: RainViewerData = await response.json();
        
        // Get the latest "past" frame (which is the most recent real data)
        const latest = data.radar.past[data.radar.past.length - 1];
        if (latest) {
          setTimestamp(latest.time);
          
          const layer = L.tileLayer(`https://tilecache.rainviewer.com${latest.path}/256/{z}/{x}/{y}/2/1_1.png`, {
            opacity: 0.6,
            zIndex: 100,
          });
          
          layer.addTo(map);
          setRadarLayer(layer);
        }
      } catch (error) {
        console.error("Error fetching radar data:", error);
      }
    };

    fetchRadarData();

    return () => {
      if (radarLayer) {
        map.removeLayer(radarLayer);
      }
    };
  }, [map]);

  return null;
};

export const RadarMap = () => {
  // Default to India
  const position: [number, number] = [20.5937, 78.9629]; // India Center

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-2xl">
      <MapContainer 
        center={position} 
        zoom={6} 
        scrollWheelZoom={false}
        className="h-full w-full grayscale-[0.8] invert-[0.9] hue-rotate-[180deg]"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RadarOverlay />
      </MapContainer>
      
      {/* Map Overlay UI */}
      <div className="absolute top-6 left-6 z-[1000] flex flex-col gap-2">
        <div className="rounded-full border border-white/10 bg-black/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
          Live Radar
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-[1000]">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
          <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <span className="text-xs font-bold text-white">Real-time composite</span>
        </div>
      </div>
    </div>
  );
};
