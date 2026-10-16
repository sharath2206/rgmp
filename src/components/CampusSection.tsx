"use client";

import { useState } from "react";
import { Camera, Sparkles, Building2, Wrench, BookOpen, Heart, Users, X } from "lucide-react";

interface GalleryItem {
  title: string;
  category: string;
  image: string;
  desc: string;
}

const rgmpGallery: GalleryItem[] = [
  {
    title: "RGMP Campus Building",
    category: "Campus",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/rgmp%20building.png/:/rs=w:900,cg:true,m",
    desc: "Main academic building of Rajiv Gandhi Memorial Polytechnic at Kengunte Circle, Mallathahalli, Bengaluru.",
  },
  {
    title: "Mechanical Workshop & Machining",
    category: "Labs & Workshop",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/RGMP%20mech.jpg/:/rs=w:900,cg:true,m",
    desc: "Hands-on machine tools, lathe equipment, fitting, and mechanical fabrication facility.",
  },
  {
    title: "Interactive Classrooms",
    category: "Academics",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/rgmp%20class.jpeg/:/rs=w:900,cg:true,m",
    desc: "Comfortable, spacious learning halls fostering focused academic and technical discussions.",
  },
  {
    title: "Cultural Events & Festivities",
    category: "Events",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/event%2001.jpeg/:/rs=w:900,cg:true,m",
    desc: "Vibrant cultural celebrations, festivals, and student performances held on campus.",
  },
  {
    title: "International Yoga Day Celebrations",
    category: "Health & Wellness",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/yoga.jpeg/:/rs=w:900,cg:true,m",
    desc: "Students and faculty engaging in guided wellness, yoga sessions, and physical fitness activities.",
  },
  {
    title: "Seminars & Technical Project Demonstrations",
    category: "Technical Events",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/event%204.jpeg/:/rs=w:900,cg:true,m",
    desc: "Industry experts, guest lecturers, and project exhibition stages for diploma candidates.",
  },
  {
    title: "Annual Day & Stage Performances",
    category: "Events",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/event%202.jpeg/:/rs=w:900,cg:true,m",
    desc: "Recognizing student achievements, talent showcases, and awards during annual celebrations.",
  },
  {
    title: "Yoga & Mindfulness Sessions",
    category: "Health & Wellness",
    image: "https://img1.wsimg.com/isteam/ip/cc3ab4bf-2aee-43a9-9856-5380b91af578/yoga2.jpeg/:/rs=w:900,cg:true,m",
    desc: "Holistic student development emphasizing mental balance alongside engineering rigor.",
  },
];

export default function CampusSection() {
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            Life at RGMP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Capturing Moments at RGMP: <span className="text-gradient-primary">A Visual Journey</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a visual walk through our campus building, mechanical workshop, classrooms, and student activities in Bangalore.
          </p>
        </div>

        {/* Real Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rgmpGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-academic shadow-academic-hover flex flex-col cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-slate-200/50 shadow-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-blue-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Lightbox */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedImg(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-slate-200 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
                aria-label="Close image popup"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[65vh] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedImg.image}
                  alt={selectedImg.title}
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 inline-block mb-2">
                  {selectedImg.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {selectedImg.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedImg.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
