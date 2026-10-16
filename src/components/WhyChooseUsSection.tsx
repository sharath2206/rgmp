"use client";

import {
  ShieldCheck,
  Award,
  BookOpen,
  MapPin,
  Clock,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section id="history" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            Our Foundation &amp; Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our History &amp; <span className="text-gradient-primary">Commitment to Excellence</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Rajiv Gandhi Memorial Polytechnic, established in 1992, has been a cornerstone of technical education in Bangalore. Recognized by the Government of Karnataka, we aim to uplift the educational standards and provide a conducive learning environment.
          </p>
        </div>

        {/* Dual Column Layout: Real Management Photo + Historical Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Real Management Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
              <img
                src="https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/RGMP%20management%203-739c1d1.jpg/:/rs=w:1200,cg:true,m"
                alt="Rajiv Gandhi Memorial Polytechnic Management & Faculty"
                className="w-full h-80 sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-1.5">
                  Institutional Leadership
                </span>
                <h4 className="text-base sm:text-lg font-bold">
                  Dedicated Leadership &amp; Seasoned Faculty
                </h4>
                <p className="text-xs text-slate-200">
                  Steering technical guidance, moral values, and student career readiness since 1992.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Established in 1992
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  More than 32 years of educational commitment in Bangalore, helping thousands of SSLC/10th students transition into qualified engineering technicians.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Recognized by Govt. of Karnataka &amp; AICTE
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All diploma programs follow the standardized syllabus prescribed by DTE Karnataka and maintain strict compliance with AICTE norms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Conducive Learning Environment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Spacious classrooms, well-maintained workshops, computer facilities, and personalized attention to every student.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Convenient Bangalore Location
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Located right at Kengunte Circle, Mallathahalli, Bangalore, with excellent BMTC bus connectivity and metro feeder access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
