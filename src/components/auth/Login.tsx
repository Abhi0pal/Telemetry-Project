/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CloudSun, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { signInWithGoogle } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import React from "react";

interface LoginProps {
  onClose: () => void;
}

export const Login = ({ onClose }: LoginProps) => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (user) {
      onClose();
    }
  }, [user, onClose]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleFormspreeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xqeybppo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Formspree error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 p-8 shadow-2xl"
      >
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-xl shadow-white/10">
            <CloudSun size={24} />
          </div>
          
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-white">Welcome to Atmos</h2>
          <p className="mb-8 text-neutral-400 font-medium">
            Sign in to access hyper-local telemetry and personalized weather logic.
          </p>

          <button 
            onClick={handleGoogleSignIn}
            className="group relative flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 px-6 text-base font-bold text-black transition-all hover:bg-neutral-200 active:scale-95"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
            Continue with Google
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          <div className="my-8 flex w-full items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">or request access</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-2 rounded-2xl bg-blue-500/10 p-6 text-blue-400"
            >
              <CheckCircle2 size={32} />
              <p className="font-bold">Request sent successfully!</p>
              <p className="text-sm text-blue-400/70">We'll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleFormspreeSubmit} className="w-full space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-white/10 bg-white/5 py-4 px-6 text-white placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-4 px-6 text-base font-bold text-white transition-all hover:bg-white/10 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  "Request Early Access"
                )}
              </button>
              {status === "error" && (
                <p className="text-xs font-medium text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          )}

          <p className="mt-10 text-xs font-medium text-neutral-600 uppercase tracking-widest">
            Secure authentication by Firebase
          </p>
        </div>
      </motion.div>
    </div>
  );
};
