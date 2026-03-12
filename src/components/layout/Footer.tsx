/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CloudSun, Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                <CloudSun size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">ATMOS</span>
            </div>
            <p className="text-sm font-medium text-neutral-500 max-w-xs leading-relaxed">
              The most accurate telemetry and forecasting engine for the modern web.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-8 uppercase tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Radar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-500">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-8 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-xs font-bold text-neutral-600 uppercase tracking-widest">
          <p>© 2024 Atmos Weather Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
