/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, PlayCircle, Map as MapIcon, CloudSun } from "lucide-react";
import { useWeather } from "../../hooks/useWeather";

export const Hero = () => {
  const { weather } = useWeather();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.03] mix-blend-screen" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center"
      >
        <a href="#" className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-medium text-blue-300 transition-colors hover:bg-blue-500/10 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Atmos v2.0 is now live
          <ArrowRight size={14} className="opacity-70" />
        </a>
        
        <h1 className="max-w-4xl text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8">
          Weather logic,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">down to the minute.</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-neutral-400 font-medium leading-relaxed mb-12">
          Hyper-local forecasts, live radar, and advanced telemetry for professionals who need to know exactly what the sky is doing before it happens.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-black shadow-xl shadow-white/10 transition-all hover:bg-neutral-200 active:scale-95">
            Start Forecasting
          </button>
          <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
            <PlayCircle size={20} className="mr-2 text-neutral-400" />
            View Telemetry
          </button>
        </div>
      </motion.div>

      {weather && (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative w-full max-w-5xl"
        >
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-2xl opacity-50" />
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900/50 p-2 backdrop-blur-2xl shadow-2xl">
            <div className="rounded-[1.5rem] bg-black border border-white/5 overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 md:w-2/5 border-b md:border-b-0 md:border-r border-white/5 bg-neutral-900/20">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <p className="text-sm font-medium text-neutral-400 mb-1">{weather.location}</p>
                    <p className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Live Observation</p>
                  </div>
                  <MapIcon size={20} className="text-neutral-600" />
                </div>
                
                <div className="flex items-end gap-4 mb-4">
                  <span className="text-7xl font-light tracking-tighter text-white">{weather.temperature}°</span>
                  <div className="pb-3">
                    <CloudSun size={40} className="text-blue-400" />
                  </div>
                </div>
                <p className="text-lg font-medium text-blue-100/70">{weather.condition}</p>
                
                <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  <div>
                    <p className="text-xs font-bold text-neutral-600 uppercase tracking-widest mb-2">Precipitation</p>
                    <p className="text-xl font-medium text-neutral-200">{weather.precipitation}%</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-600 uppercase tracking-widest mb-2">Wind ({weather.windDirection})</p>
                    <p className="text-xl font-medium text-neutral-200">{weather.windSpeed} <span className="text-sm text-neutral-500 font-normal">mph</span></p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-between min-h-[350px]">
                <div className="flex justify-between items-center mb-12">
                  <p className="text-sm font-medium text-neutral-300">Precipitation Intensity</p>
                  <div className="flex gap-2 items-center bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-medium text-neutral-400">Live Forecast</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-between gap-2 h-40">
                  {weather.intensityData.map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="w-full rounded-t-md bg-gradient-to-t from-blue-600/20 to-blue-400/80"
                    />
                  ))}
                </div>
                
                <div className="flex justify-between mt-6 text-xs font-bold text-neutral-600 uppercase tracking-widest">
                  <span>Now</span>
                  <span>+30m</span>
                  <span>+60m</span>
                  <span>+90m</span>
                  <span>+120m</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};
