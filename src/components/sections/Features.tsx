/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Target, Bell, Code2 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Hyper-local Targeting",
      description: "Forecasts specific to your exact coordinates, not just the nearest airport reporting station.",
      icon: <Target className="text-blue-400" />,
    },
    {
      title: "Sub-minute Alerts",
      description: "Receive push notifications moments before precipitation begins or severe conditions develop.",
      icon: <Bell className="text-indigo-400" />,
    },
    {
      title: "Developer API",
      description: "Integrate raw telemetry data directly into your stack with our low-latency, GraphQL-ready API.",
      icon: <Code2 className="text-cyan-400" />,
    }
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Engineered for precision.</h2>
        <p className="text-lg md:text-xl text-neutral-400 font-medium max-w-2xl mx-auto">Everything you need to build weather-aware applications or stay ahead of the storm.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col rounded-3xl border border-white/5 bg-neutral-900/50 p-8 transition-colors hover:border-white/10"
          >
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10 transition-all group-hover:bg-white/10">
              {feature.icon}
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-neutral-400 font-medium leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
