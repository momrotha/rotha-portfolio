"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rothamom22@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-bold mb-3.5 border border-red-200">
            <MessageSquare className="w-4 h-4 text-red-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-zinc-600 font-normal">
            Open for full-stack, backend, frontend, and web developer roles, project collaborations, or technical discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Telegram Card */}
            <a
              href="https://t.me/rothamomm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 rounded-3xl bg-[#f3f4f6] border border-zinc-200 hover:border-sky-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Send className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Telegram Direct
                  </p>
                  <p className="text-base sm:text-lg font-bold text-zinc-900 mt-0.5">
                    @rothamomm
                  </p>
                  <p className="text-xs sm:text-sm text-sky-600 font-semibold">
                    Fastest response time
                  </p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-sky-600 transition-colors" />
            </a>

            {/* Email Card with Red Action Button */}
            <div className="p-6 rounded-3xl bg-[#f3f4f6] border border-zinc-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-xs">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="text-base sm:text-lg font-bold text-zinc-900 mt-0.5 break-all">
                      rothamom22@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="mailto:rothamom22@gmail.com"
                  className="flex-1 py-3 px-4 text-center rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-sm shadow-red-500/25 transition-colors"
                >
                  Compose Email
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-3 px-4 rounded-xl bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-800 text-sm font-bold inline-flex items-center gap-2 shadow-2xs transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 p-6 rounded-3xl bg-[#f3f4f6] border border-zinc-200">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Phone Number
                </p>
                <p className="text-base sm:text-lg font-bold text-zinc-900 mt-0.5">
                  (+855) 88 30 62 075
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium">Available Mon – Sat</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-6 rounded-3xl bg-[#f3f4f6] border border-zinc-200">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 text-white flex items-center justify-center shadow-xs">
                <MapPin className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-base sm:text-lg font-bold text-zinc-900 mt-0.5">
                  Phnom Penh, Cambodia
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                  Prek Kampeus, Dangkor
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Red Primary Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#f3f4f6] p-7 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 mb-1 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-red-600" />
              <span>Send Me a Message</span>
            </h3>
            <p className="text-sm text-zinc-500 mb-8 font-normal">
              Fill in the form below and I will get back to you promptly.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold">Message Received!</h4>
                <p className="text-sm text-emerald-800 leading-relaxed font-normal">
                  Thank you for reaching out. I will review your message and reply as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-800">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sokha"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 focus:outline-hidden focus:ring-2 focus:ring-red-600 text-base text-zinc-900 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-800">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 focus:outline-hidden focus:ring-2 focus:ring-red-600 text-base text-zinc-900 placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-800">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 focus:outline-hidden focus:ring-2 focus:ring-red-600 text-base text-zinc-900 placeholder:text-zinc-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-800">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 focus:outline-hidden focus:ring-2 focus:ring-red-600 text-base text-zinc-900 placeholder:text-zinc-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white text-base font-bold shadow-sm shadow-red-500/25 hover:shadow-md hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
