"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  ExternalLink,
  Download,
} from "lucide-react";

const faqs = [
  {
    q: "What is the eligibility criteria for 1st Year Diploma admission at RGMP?",
    a: "Candidates must have passed 10th standard (SSLC) or equivalent examination from a recognized board with a minimum of 35% aggregate marks. Both Karnataka and Non-Karnataka students are eligible as per DTE Karnataka guidelines.",
  },
  {
    q: "Can 12th Science or ITI pass students get Direct Second Year (Lateral Entry) admission?",
    a: "Yes! Students who have passed 12th Science / Vocational or 2-year ITI courses in relevant engineering trades can secure direct admission into the 3rd Semester (2nd Year) under the DTE lateral entry scheme.",
  },
  {
    q: "What are the six diploma courses offered at RGMP?",
    a: "RGMP offers 3-year full-time diploma programs in: Computer Science & Engg, Electronics & Communication Engg, Mechanical Engg, Civil Engg, Electrical & Electronics Engg, and Apparel Design & Fabrication Technology.",
  },
  {
    q: "Is Rajiv Gandhi Memorial Polytechnic approved by AICTE?",
    a: "Yes, Rajiv Gandhi Memorial Polytechnic is fully approved by AICTE, New Delhi and recognized by the Government of Karnataka, Directorate of Technical Education (DTE).",
  },
  {
    q: "Where is the college located in Bangalore?",
    a: "RGMP is situated at No 5/1, Kengunte Circle, Mallathahalli, Bengaluru, Karnataka 560056, near Bangalore University / Nagarabhavi area with easy access via BMTC buses.",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const rgmpProgramsList = [
    "Diploma in Computer Science & Engineering",
    "Diploma in Electronics & Communication Engineering",
    "Diploma in Mechanical Engineering",
    "Diploma in Civil Engineering",
    "Diploma in Electrical & Electronics Engineering",
    "Diploma in Apparel Design & Fabrication Technology",
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-blue-700 uppercase mb-3">
            Admissions Desk &amp; Campus Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-gradient-primary">Rajiv Gandhi Memorial Polytechnic</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We are excited to be accepting applications for the upcoming academic session! Reach out directly or visit our Mallathahalli campus in Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Contact Info Cards + FAQs */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-academic">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-slate-900 font-bold text-sm mb-1">
                  Campus Address
                </div>
                <div className="text-slate-600 text-xs leading-relaxed">
                  Rajiv Gandhi Memorial Polytechnic,<br />
                  No 5/1, Kengunte Circle, Mallathahalli,<br />
                  Bengaluru, Karnataka, INDIA - 560056
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-academic">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-slate-900 font-bold text-sm mb-1">
                  Phone Numbers
                </div>
                <div className="text-slate-600 text-xs leading-relaxed space-y-1">
                  <div>
                    Mobile: <a href="tel:+919845252049" className="text-blue-700 font-semibold hover:underline">+91 98452 52049</a>
                  </div>
                  <div>
                    Office: <a href="tel:08023213282" className="text-blue-700 font-semibold hover:underline">080 2321 3282</a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-academic">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-slate-900 font-bold text-sm mb-1">
                  Official Email
                </div>
                <div className="text-slate-600 text-xs leading-relaxed">
                  <a href="mailto:rgmpin@gmail.com" className="text-blue-700 font-semibold hover:underline">
                    rgmpin@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Send inquiries &amp; document scans
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-academic">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-slate-900 font-bold text-sm mb-1">
                  Office Hours
                </div>
                <div className="text-slate-600 text-xs leading-relaxed">
                  <span className="font-semibold text-slate-800">Open today</span><br />
                  09:00 am – 05:00 pm<br />
                  <span className="text-[11px] text-slate-400">Monday to Saturday</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Connect Button */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    Need Instant Assistance?
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Chat with our admissions coordinator on WhatsApp (+91 98452 52049)
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/919845252049?text=Hello%20RGMP,%20I%20am%20interested%20in%20Diploma%20Admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 shadow-sm"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* FAQs Accordion */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-800 text-sm hover:text-blue-700 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-blue-700 shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Application Form */}
          <div>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-academic">
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 inline-block mb-1.5">
                  Admissions Form 2025–26
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Apply Online for RGMP Diploma
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our admissions office will get in touch with you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-lg mb-1">
                    Application Received!
                  </h4>
                  <p className="text-slate-600 text-xs max-w-xs leading-relaxed">
                    Thank you! Our admissions coordinator will contact you at <strong>{formState.phone || "your number"}</strong> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 mb-1.5 font-medium">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        suppressHydrationWarning
                        data-lpignore="true"
                        placeholder="Candidate name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-700 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-700 mb-1.5 font-medium">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        suppressHydrationWarning
                        data-lpignore="true"
                        placeholder="+91 XXXXX XXXXX"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-700 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      suppressHydrationWarning
                      data-lpignore="true"
                      placeholder="student@example.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-700 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 mb-1.5 font-medium">
                      Select Course of Interest *
                    </label>
                    <select
                      required
                      suppressHydrationWarning
                      value={formState.program}
                      onChange={(e) =>
                        setFormState({ ...formState, program: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-blue-700 focus:bg-white transition-all"
                    >
                      <option value="">-- Choose Diploma Branch --</option>
                      {rgmpProgramsList.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 mb-1.5 font-medium">
                      Message / Academic Query (Optional)
                    </label>
                    <textarea
                      rows={3}
                      suppressHydrationWarning
                      data-lpignore="true"
                      placeholder="Mention SSLC / 10th percentage, hostel requirement, or admission query..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-700 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Admission Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-slate-400 text-[11px] text-center">
                    Direct admission inquiries can also be made via WhatsApp or email: rgmpin@gmail.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Real Google Map Location Embed */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-academic bg-white p-3">
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-700" />
                Find RGMP on Google Maps
              </h4>
              <p className="text-xs text-slate-500">
                No 5/1, Kengunte Circle, Mallathahalli, Bengaluru, Karnataka 560056
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Rajiv+Gandhi+Memorial+Polytechnic+Mallathahalli+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 rounded-lg border border-blue-200 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="h-72 w-full rounded-2xl overflow-hidden bg-slate-100">
            <iframe
              title="RGMP Campus Map Location"
              src="https://maps.google.com/maps?q=Rajiv%20Gandhi%20Memorial%20Polytechnic%2C%20Mallathahalli%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
