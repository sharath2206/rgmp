"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Cpu,
  Wrench,
  Zap,
  Building,
  Scissors,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
} from "lucide-react";

interface CourseItem {
  id: string;
  title: string;
  duration: string;
  eligibility: string;
  category: "all" | "tech" | "core" | "design";
  description: string;
  labs: string[];
  career: string;
  icon: any;
  featured?: boolean;
}

const rgmpCourses: CourseItem[] = [
  {
    id: "cse",
    title: "Diploma in Computer Science & Engineering",
    duration: "3 Years · 6 Semesters",
    eligibility: "10th / SSLC Pass (Min 35%)",
    category: "tech",
    description:
      "Core training in software development, computer networks, database systems, Python & Java programming, and web technologies.",
    labs: ["Computer Programming Lab", "Network Administration Lab", "Database & Cloud Computing Lab"],
    career: "Software Developer, System Administrator, Network Technician, Web Developer",
    icon: Laptop,
    featured: true,
  },
  {
    id: "ece",
    title: "Diploma in Electronics & Communication Engineering",
    duration: "3 Years · 6 Semesters",
    eligibility: "10th / SSLC Pass (Min 35%)",
    category: "tech",
    description:
      "Instruction in digital electronic circuits, microcontroller programming, communication systems, IoT fundamentals, and embedded hardware.",
    labs: ["Analog & Digital Electronics Lab", "Microcontroller & Embedded Systems Lab", "Communication Systems Lab"],
    career: "Embedded Hardware Engineer, Telecomm Specialist, IoT Technician, PCB Designer",
    icon: Cpu,
    featured: true,
  },
  {
    id: "me",
    title: "Diploma in Mechanical Engineering",
    duration: "3 Years · 6 Semesters",
    eligibility: "10th / SSLC Pass (Min 35%)",
    category: "core",
    description:
      "Comprehensive workshop skills covering machine tools, lathe operations, welding, thermal engineering, CAD design, and industrial manufacturing.",
    labs: ["Machine Shop & Fitting Workshop", "Welding & Foundry Section", "CAD/CAM Computing Studio"],
    career: "Mechanical Draughtsman, CNC Operator, Quality Inspection Engineer, Production Trainee",
    icon: Wrench,
    featured: true,
  },
  {
    id: "ce",
    title: "Diploma in Civil Engineering",
    duration: "3 Years · 6 Semesters",
    eligibility: "10th / SSLC Pass (Min 35%)",
    category: "core",
    description:
      "Practical surveying, structural drafting, construction materials testing, building construction practices, and highway engineering.",
    labs: ["Surveying & Levelling Lab", "Concrete & Material Testing Lab", "Civil CAD Drafting Lab"],
    career: "Site Supervisor, Civil Draughtsman, Surveying Technician, Quantity Estimator",
    icon: Building,
  },
  {
    id: "eee",
    title: "Diploma in Electrical & Electronics Engineering",
    duration: "3 Years · 6 Semesters",
    eligibility: "10th / SSLC Pass (Min 35%)",
    category: "core",
    description:
      "Electrical power machines, transmission systems, circuit theory, electrical wiring safety, solar installations, and power electronics.",
    labs: ["Electrical Machines Lab", "Wiring & Measurements Lab", "Power Electronics Lab"],
    career: "Electrical Maintenance Engineer, Substation Technician, Solar System Installer, Control Panel Wireman",
    icon: Zap,
  },
  {
    id: "adft",
    title: "Diploma in Apparel Design & Fabrication Technology",
    duration: "3 Years · 6 Semesters",
    eligibility: "10th / SSLC Pass (Min 35%)",
    category: "design",
    description:
      "Specialized polytechnic course in garment manufacturing, textile science, pattern making, computer-aided fashion illustration, and apparel quality control.",
    labs: ["Garment Construction Lab", "Pattern Making & Grading Studio", "Textile Testing Laboratory"],
    career: "Fashion Merchandiser, Pattern Maker, Apparel Quality Controller, Garment Production Executive",
    icon: Scissors,
  },
];

export default function ProgramsSection() {
  const [filter, setFilter] = useState<"all" | "tech" | "core" | "design">("all");

  const filtered =
    filter === "all" ? rgmpCourses : rgmpCourses.filter((p) => p.category === filter);

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Explore Our Programmes
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Courses Offered at <span className="text-gradient-primary">RGMP</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Approved by All India Council for Technical Education (AICTE), New Delhi &amp; Directorate of Technical Education (DTE), Government of Karnataka.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All 6 Courses" },
              { id: "tech", label: "Computer & Electronics" },
              { id: "core", label: "Mechanical, Civil & Electrical" },
              { id: "design", label: "Apparel & Fashion Tech" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  filter === tab.id
                    ? "bg-blue-700 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-7 border transition-all duration-300 shadow-academic shadow-academic-hover flex flex-col justify-between relative ${
                item.featured ? "border-blue-300 ring-1 ring-blue-100" : "border-slate-200"
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Popular Course
                </div>
              )}

              <div>
                {/* Header Icon + Meta */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  <span>Eligibility: {item.eligibility}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Practical Labs */}
                <div className="mb-5 space-y-1.5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Key Laboratory Infrastructure:
                  </div>
                  {item.labs.map((lab, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lab}</span>
                    </div>
                  ))}
                </div>

                {/* Career Scope */}
                <div className="text-xs text-slate-500 mb-6">
                  <span className="font-semibold text-slate-700">Career Scope: </span>
                  {item.career}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="#contact"
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 group"
                >
                  <span>Admission Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/919845252049?text=Hello%20RGMP,%20I%20want%20information%20on%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-sm"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* EOA Report & Lateral Entry banner */}
        <div id="eoa" className="mt-14 bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-300 text-xs font-bold mb-3">
              <FileText className="w-3.5 h-3.5" />
              Official AICTE Approvals (E.O.A)
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              Download Extension of Approval (E.O.A) Reports
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Rajiv Gandhi Memorial Polytechnic complies with all regulatory standards set by the All India Council for Technical Education (AICTE), New Delhi.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://img1.wsimg.com/blobby/go/cc3ab4bf-2aee-43a9-9856-5380b91af578/EOA%20Report%202026-27.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>EOA Report 2026–27 (PDF)</span>
            </a>
            <a
              href="https://img1.wsimg.com/blobby/go/cc3ab4bf-2aee-43a9-9856-5380b91af578/EOA%20Report%2021-22.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-white/20 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>EOA Report 2021–22 (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
