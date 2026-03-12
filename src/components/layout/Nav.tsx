/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CloudSun, Menu, X, LogOut, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../firebase";

interface NavProps {
  onLoginClick: () => void;
}

export const Nav = ({ onLoginClick }: NavProps) => {
  const isScrolled = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header 
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled 
          ? "border-white/10 bg-black/80 backdrop-blur-xl py-3" 
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            <CloudSun size={20} />
          </div>
          <span className="text-lg font-medium tracking-tight text-white">ATMOS</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#radar" className="hover:text-white transition-colors">Radar</a>
          <a href="#telemetry" className="hover:text-white transition-colors">Telemetry</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ""} className="h-7 w-7 rounded-full" />
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <UserIcon size={14} />
                  </div>
                )}
                <span className="text-sm font-medium text-white">{user.displayName?.split(' ')[0]}</span>
              </div>
              <button 
                onClick={() => logout()}
                className="text-neutral-400 hover:text-white transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={onLoginClick}
                className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                Log in
              </button>
              <button 
                onClick={onLoginClick}
                className="relative inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-neutral-200 active:scale-95 shadow-lg shadow-white/10"
              >
                Get Access
              </button>
            </>
          )}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden"
        >
          <nav className="flex flex-col gap-4 text-lg font-medium text-neutral-400">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#radar" onClick={() => setIsMobileMenuOpen(false)}>Radar</a>
            <a href="#telemetry" onClick={() => setIsMobileMenuOpen(false)}>Telemetry</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <hr className="border-white/10" />
            {user ? (
              <button onClick={() => logout()} className="text-left text-red-400">Logout</button>
            ) : (
              <button onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}>Log in</button>
            )}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
