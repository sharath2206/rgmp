"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  MessageCircle,
  ExternalLink,
  Cookie,
  Shield,
  Sliders,
} from "lucide-react";
import CookiePreferencesModal from "./CookiePreferencesModal";

const footerLinks = {
  "Diploma Courses": [
    "Computer Science & Engineering",
    "Electronics & Communication Engg",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical & Electronics Engineering",
    "Apparel Design & Fabrication Tech",
  ],
  "Quick Navigation": [
    "Home",
    "Courses Offered",
    "Our History & Trust",
    "AICTE E.O.A Reports",
    "Campus Photo Gallery",
    "Contact & Directions",
  ],
  "AICTE E.O.A Reports": [
    "EOA Report 2026–27 (PDF)",
    "EOA Report 2021–22 (PDF)",
    "AICTE Approval Compliance",
    "DTE Karnataka Norms",
    "Mandatory Disclosures",
  ],
};

export default function Footer() {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [cookiePolicyView, setCookiePolicyView] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Admissions & Contact Banner */}
      <div className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <div className="text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/80 inline-block mb-2">
                Admissions 2025–26 Open
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Empowering Futures Through Education
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
                Rajiv Gandhi Memorial Polytechnic (Estd. 1992) welcomes passionate students to build impactful careers in core &amp; IT engineering.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="https://wa.me/919845252049?text=Hello%20RGMP,%20I%20am%20interested%20in%20Diploma%20Admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="tel:+919845252049"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 98452 52049</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-4 group">
              <img
                src="/rgmp_logo.svg"
                alt="RGMP Crest"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl object-contain bg-white p-1 border border-slate-700"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  RGMP
                </span>
                <span className="text-xs font-bold text-amber-400 mt-0.5">
                  Rajiv Gandhi Memorial Polytechnic
                </span>
                <span className="text-[10px] text-slate-400">
                  Estd. 1992 · Govt. of Karnataka Recognized · AICTE Approved
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed mb-6 max-w-sm">
              Established in 1992, RGMP has been a cornerstone of technical education in Bangalore, providing quality diploma training and empowering future engineering leaders.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>No 5/1, Kengunte Circle, Mallathahalli, Bengaluru, Karnataka, INDIA - 560056</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98452 52049 / 080 2321 3282</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <span>rgmpin@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon – Sat: 09:00 am – 05:00 pm</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Diploma Courses
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {footerLinks["Diploma Courses"].map((link) => (
                <li key={link}>
                  <Link href="#courses" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {footerLinks["Quick Navigation"].map((link) => (
                <li key={link}>
                  <Link href="#home" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              AICTE E.O.A Documents
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://img1.wsimg.com/blobby/go/cc3ab4bf-2aee-43a9-9856-5380b91af578/EOA%20Report%202026-27.PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>EOA Report 2026–27 (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://img1.wsimg.com/blobby/go/cc3ab4bf-2aee-43a9-9856-5380b91af578/EOA%20Report%2021-22.PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>EOA Report 2021–22 (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://rgmp.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Official Portal (rgmp.in)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cookies & Privacy Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <Cookie className="w-3.5 h-3.5 text-amber-400" />
              Cookie &amp; Privacy Notice:
            </span>
            <button
              type="button"
              onClick={() => setIsCookieModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium hover:underline transition-colors"
            >
              <Sliders className="w-3 h-3" />
              Cookie Preferences
            </button>
            <button
              type="button"
              onClick={() => setCookiePolicyView(!cookiePolicyView)}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Cookie Policy
            </button>
            <Link href="#contact" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Statement
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>AICTE &amp; DTE Compliant Privacy Standards</span>
          </div>
        </div>

        {/* Inline Cookie Policy expansion */}
        {cookiePolicyView && (
          <div className="max-w-7xl mx-auto mt-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-white font-bold">
              <span>RGMP Cookie Policy Information</span>
              <button
                type="button"
                onClick={() => setCookiePolicyView(false)}
                className="text-slate-400 hover:text-white text-xs"
              >
                Close ✕
              </button>
            </div>
            <p>
              Rajiv Gandhi Memorial Polytechnic uses strictly necessary cookies to ensure the website operates correctly and securely, including providing access to mandatory academic disclosures and AICTE approvals. Analytical and functional cookies help us measure visitor interest in specific engineering diploma programs to assist admissions and counseling services. You can adjust your consent choices at any time via the{" "}
              <button
                type="button"
                onClick={() => {
                  setCookiePolicyView(false);
                  setIsCookieModalOpen(true);
                }}
                className="text-blue-400 underline font-medium"
              >
                Cookie Preferences
              </button>{" "}
              panel.
            </p>
          </div>
        )}
      </div>

      {/* Copyrights & Attribution Bar */}
      <div className="border-t border-slate-900 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-medium text-slate-400">
              Copyright © 2026 RGMP - All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              Rajiv Gandhi Memorial Polytechnic · Affiliated to DTE Karnataka, Approved by AICTE New Delhi.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <Link href="#contact" className="hover:text-white transition-colors">
              Admissions Helpdesk
            </Link>
            <span>•</span>
            <Link href="#eoa" className="hover:text-white transition-colors">
              AICTE E.O.A
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Cookie Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />
    </footer>
  );
}
