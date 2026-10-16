"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, BookOpen, Building2, Briefcase, Trophy, CheckCircle2 } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 1992,
    suffix: "",
    label: "Year Established",
    description: "Cornerstone of technical education in Bangalore for over 32+ years",
    color: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    icon: BookOpen,
    value: 6,
    suffix: "",
    label: "Diploma Programs",
    description: "AICTE approved engineering & technical diploma courses",
    color: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    icon: Users,
    value: 3500,
    suffix: "+",
    label: "Successful Alumni",
    description: "Empowered technicians & engineers contributing nationwide",
    color: "text-indigo-700 bg-indigo-50 border-indigo-200",
  },
  {
    icon: Building2,
    value: 100,
    suffix: "%",
    label: "Government Recognized",
    description: "Recognized by Govt. of Karnataka & approved by AICTE New Delhi",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    icon: Briefcase,
    value: 30,
    suffix: "+",
    label: "Recruiting & Industry Partners",
    description: "Internship linkages & campus placement drives for diploma holders",
    color: "text-violet-700 bg-violet-50 border-violet-200",
  },
  {
    icon: Trophy,
    value: 100,
    suffix: "%",
    label: "Dedicated Labs & Workshops",
    description: "Fully equipped mechanical, electronics, computer & civil laboratories",
    color: "text-rose-700 bg-rose-50 border-rose-200",
  },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = target > 1000 ? target - 100 : 0;
    const duration = 1500;
    const step = 20;
    const increment = Math.max(1, (target - start) / (duration / step));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span suppressHydrationWarning>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            Institutional Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Over 3 Decades of <span className="text-gradient-primary">Excellence in Bangalore</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Rajiv Gandhi Memorial Polytechnic (RGMP) is committed to uplifting educational standards and providing a conducive, technology-focused learning ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-academic shadow-academic-hover flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
