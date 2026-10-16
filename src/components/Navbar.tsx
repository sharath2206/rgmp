"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Menu,
  X,
  Award,
  FileText,
  MessageCircle,
  MapPin,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Courses Offered", href: "#courses", id: "courses" },
  { label: "Our History", href: "#history", id: "history" },
  { label: "AICTE E.O.A", href: "#eoa", id: "eoa", hasIcon: true },
  { label: "Campus Gallery", href: "#gallery", id: "gallery" },
  { label: "Contact Us", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ["home", "courses", "history", "eoa", "gallery", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" />
              Approved by AICTE, New Delhi &amp; Govt. of Karnataka (DTE)
            </span>
            <span className="text-slate-400 hidden md:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400 inline" />
              Mallathahalli, Bengaluru · Estd. 1992
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+919845252049"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>+91 98452 52049</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:08023213282"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors hidden lg:inline-flex"
            >
              <span>Ph: 080 2321 3282</span>
            </a>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <a
              href="mailto:rgmpin@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-blue-400" />
              <span>rgmpin@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200"
            : "bg-white/90 backdrop-blur-sm py-3 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Large Logo & Clean RGMP Name */}
            <Link href="#home" className="flex items-center gap-3.5 group">
              <img
                src="/rgmp_logo.svg"
                alt="RGMP Logo"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain p-0.5 rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                RGMP
              </span>
            </Link>

            {/* Desktop Navigation Links with Blue Highlight for Active Item */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-3.5 py-2 text-sm rounded-xl transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "text-blue-700 bg-blue-50/90 font-bold shadow-sm ring-1 ring-blue-200"
                        : "text-slate-700 hover:text-blue-700 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    {item.hasIcon && (
                      <FileText
                        className={`w-3.5 h-3.5 ${
                          isActive ? "text-blue-700" : "text-blue-600"
                        }`}
                      />
                    )}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="https://wa.me/919845252049?text=Hello%20RGMP,%20I%20am%20interested%20in%20Diploma%20Admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white transition-all bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl hover:from-blue-800 hover:to-indigo-800 shadow-md shadow-blue-500/20 active:scale-95"
              >
                <span>Apply for Admission</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Active Highlight */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {item.hasIcon && (
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                        PDF
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/919845252049?text=Hello%20RGMP,%20I%20am%20interested%20in%20Diploma%20Admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Message on WhatsApp (+91 98452 52049)</span>
              </a>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md text-center"
              >
                Apply for 2025–26 Admissions
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
