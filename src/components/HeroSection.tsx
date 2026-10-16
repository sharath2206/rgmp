"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  CheckCircle2,
  Sparkles,
  Award,
  MapPin,
  MessageCircle,
  FileText,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

      {/* Live Announcement Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-blue-50/80 backdrop-blur border border-blue-200/80 rounded-2xl p-2 sm:p-2.5 flex items-center gap-3 shadow-sm overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-blue-700 text-white shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Admissions Alert
          </span>
          <div className="overflow-hidden relative w-full">
            <div className="animate-ticker text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap gap-12">
              <span className="flex items-center gap-2">
                🎓 <strong>Admissions Open 2025–26:</strong> Applications accepted for 3-Year Diploma in Engineering at Rajiv Gandhi Memorial Polytechnic!
              </span>
              <span className="flex items-center gap-2">
                📄 <strong>AICTE E.O.A Reports:</strong> Official Extension of Approval Reports available for download in our E.O.A section.
              </span>
              <span className="flex items-center gap-2">
                📞 <strong>Direct Admissions Desk:</strong> Call +91 98452 52049 / 080 2321 3282 or email rgmpin@gmail.com.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Established in 1992 · Over 3 Decades of Technical Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Empowering Futures <br />
              <span className="text-gradient-primary">Through Education</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <strong>Rajiv Gandhi Memorial Polytechnic (RGMP)</strong> has been a cornerstone of technical education in Bangalore since 1992. Recognized by the Government of Karnataka and approved by AICTE, we provide a conducive, hands-on learning environment for future technocrats.
            </p>

            {/* Key Checklist Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Recognized by Government of Karnataka",
                "Approved by AICTE, New Delhi",
                "Premier Polytechnic in Bangalore West",
                "Hands-On Workshops & Computer Labs",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#courses"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 group"
              >
                <span>Explore Diploma Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/919845252049?text=Hello%20RGMP,%20I%20am%20interested%20in%20Diploma%20Admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="https://img1.wsimg.com/blobby/go/cc3ab4bf-2aee-43a9-9856-5380b91af578/EOA%20Report%202026-27.PDF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>AICTE E.O.A Report</span>
              </a>
            </div>

            {/* Quick Accreditation Footprint */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <div>
                <strong className="text-slate-900 block text-base font-bold">1992</strong>
                <span>Year Established</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <strong className="text-slate-900 block text-base font-bold">AICTE</strong>
                <span>New Delhi Approved</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <strong className="text-slate-900 block text-base font-bold">Govt. of Karnataka</strong>
                <span>DTE Affiliated</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <strong className="text-slate-900 block text-base font-bold">Mallathahalli</strong>
                <span>Bengaluru Location</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real RGMP Campus Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Card: Real RGMP Campus Building */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
                <img
                  src="https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/rgmp%20building.png/:/rs=w:1200,cg:true,m"
                  alt="Rajiv Gandhi Memorial Polytechnic (RGMP) Building, Mallathahalli, Bengaluru"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2">
                    Official Campus View
                  </span>
                  <h3 className="text-lg font-bold leading-snug">
                    Rajiv Gandhi Memorial Polytechnic
                  </h3>
                  <p className="text-xs text-slate-200 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    No 5/1, Kengunte Circle, Mallathahalli, Bengaluru - 560056
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Management / Leadership */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl animate-soft-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Government Approval</div>
                    <div className="text-sm font-black text-slate-900">AICTE &amp; DTE Karnataka</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Admissions Helpline */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <MessageCircle className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Admissions Helpline</div>
                    <div className="text-sm font-black text-slate-900">+91 98452 52049</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
