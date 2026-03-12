/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const TrustedBy = () => {
  return (
    <section className="border-y border-white/5 bg-neutral-900/20 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-neutral-600 mb-12 uppercase">Trusted by meteorologists at</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale">
          <span className="text-xl font-bold tracking-tighter">AEROSPACE</span>
          <span className="text-xl font-bold tracking-tighter">NEXUS</span>
          <span className="text-xl font-bold tracking-tighter">CLIMATE.IO</span>
          <span className="text-xl font-bold tracking-tighter">STRATOSPHERE</span>
        </div>
      </div>
    </section>
  );
};
