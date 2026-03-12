/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustedBy } from "./components/sections/TrustedBy";
import { Features } from "./components/sections/Features";
import { RadarPreview } from "./components/sections/RadarPreview";
import { CTA } from "./components/sections/CTA";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./components/auth/Login";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
        <Nav onLoginClick={() => setIsLoginOpen(true)} />
        <main>
          <Hero />
          <TrustedBy />
          <Features />
          <RadarPreview />
          <CTA />
        </main>
        <Footer />

        <AnimatePresence>
          {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
        </AnimatePresence>
      </div>
    </AuthProvider>
  );
}
