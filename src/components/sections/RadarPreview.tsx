/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Zap, Activity, Wind, Droplets } from "lucide-react";
import { RadarMap } from "../weather/RadarMap";
import { useState, useEffect } from "react";

export const RadarPreview = () => {
  const [telemetry, setTelemetry] = useState({
    pressure: 1012,
    wind: 14,
    humidity: 64
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        pressure: +(prev.pressure + (Math.random() - 0.5) * 0.2).toFixed(1),
        wind: +(prev.wind + (Math.random() - 0.5) * 0.5).toFixed(1),
        humidity: +(prev.humidity + (Math.random() - 0.5) * 0.3).toFixed(1)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="radar" className="relative border-t border-white/5 bg-black py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.05]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-medium text-blue-300 mb-8">
              Next-Gen Radar: South Asia Composite
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
              See the invisible.
            </h2>
            <p className="text-lg text-neutral-400 font-medium leading-relaxed mb-12">
              Our proprietary radar composite merges data from multiple satellites and ground stations across the Indian subcontinent, providing a smooth, high-resolution view of atmospheric activity.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Wind size={20} />
                </div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Wind Speed</p>
                <p className="text-2xl font-bold text-white">{telemetry.wind} <span className="text-sm font-medium text-neutral-500">km/h</span></p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Droplets size={20} />
                </div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Humidity</p>
                <p className="text-2xl font-bold text-white">{telemetry.humidity} <span className="text-sm font-medium text-neutral-500">%</span></p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: "Sub-kilometer precision", desc: "Granular detail across the Indo-Gangetic Plain." },
                { title: "Monsoon tracking", desc: "Specialized algorithms for tropical storm systems." },
                { title: "Predictive tracking", desc: "AI-driven forward modeling of storm paths." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="text-sm text-neutral-500 font-medium mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square">
            <RadarMap />
            
            <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl border border-white/10 bg-neutral-900/80 p-6 backdrop-blur-xl shadow-2xl flex flex-col gap-6 min-w-[240px]">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-0.5">Cell Detected</p>
                  <p className="text-sm font-bold text-white">Mumbai Sector 4</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-500">Intensity</span>
                  <span className="text-xs font-bold text-orange-400">High</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    className="h-full bg-orange-400"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-500">ETA</span>
                  <span className="text-xs font-bold text-white">14:22 IST</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 p-2">
                <Activity size={14} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Live Telemetry Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
