/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CTA = () => {
  return (
    <section className="relative mx-auto w-full overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600/10 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8">
          Stop guessing.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Start knowing.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 font-medium mb-12 max-w-xl mx-auto">
          Join thousands of users relying on Atmos for critical weather data. Free for individual use, powerful enough for enterprise.
        </p>
        <button className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-black shadow-2xl shadow-white/10 transition-all hover:scale-105 active:scale-95">
          Create Free Account
        </button>
      </div>
    </section>
  );
};
