"use client";

import { useState } from "react";
import { X, ShieldCheck, Check, Info } from "lucide-react";

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiePreferencesModal({
  isOpen,
  onClose,
}: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and locked
    analytics: true,
    functional: true,
  });

  const [savedFeedback, setSavedFeedback] = useState(false);

  if (!isOpen) return null;

  const handleToggle = (key: "analytics" | "functional") => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    setSavedFeedback(true);
    setTimeout(() => {
      setSavedFeedback(false);
      onClose();
    }, 600);
  };

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      functional: true,
    });
    setSavedFeedback(true);
    setTimeout(() => {
      setSavedFeedback(false);
      onClose();
    }, 600);
  };

  const handleRejectNonEssential = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      functional: false,
    });
    setSavedFeedback(true);
    setTimeout(() => {
      setSavedFeedback(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl text-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="cookie-modal-title"
                className="text-base sm:text-lg font-bold text-white tracking-tight"
              >
                Cookie Settings &amp; Preferences
              </h2>
              <p className="text-xs text-slate-400">
                Manage your privacy choices for Rajiv Gandhi Memorial Polytechnic
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex items-start gap-3">
            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              We respect your privacy. We use cookies to enhance website navigation, analyze site usage, and assist in admissions service delivery in accordance with regulatory standards.
            </p>
          </div>

          {/* Necessary Cookies */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Strictly Necessary Cookies</span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                  Always Active
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Essential for website security, page routing, and loading official AICTE documents. These cannot be disabled.
              </p>
            </div>
            <input
              type="checkbox"
              checked={true}
              disabled
              aria-label="Strictly necessary cookies always enabled"
              className="mt-1 h-4 w-4 rounded accent-blue-600 cursor-not-allowed opacity-75"
            />
          </div>

          {/* Analytics Cookies */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="font-semibold text-white">Analytics &amp; Performance Cookies</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Helps us understand how prospective students and visitors interact with academic branches, syllabus details, and gallery items to improve user experience.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleToggle("analytics")}
                className="sr-only peer"
                aria-label="Toggle analytics cookies"
              />
              <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Functional Cookies */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="font-semibold text-white">Functional &amp; Interaction Cookies</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enables interactive features such as photo gallery zoom lightbox, direct WhatsApp messaging pre-fills, and campus map directions.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1">
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={() => handleToggle("functional")}
                className="sr-only peer"
                aria-label="Toggle functional cookies"
              />
              <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            Reject Optional
          </button>
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
            >
              {savedFeedback ? (
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <Check className="w-3.5 h-3.5" /> Saved!
                </span>
              ) : (
                "Save Preferences"
              )}
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-md shadow-blue-500/20"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

