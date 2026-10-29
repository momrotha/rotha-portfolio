"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Send,
  MapPin,
  Sparkles,
  Layers,
  Server,
  Globe,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { motion } from "motion/react";

export default function Hero() {
  const versatileRoles = [
    { title: "Full-Stack Developer", icon: Layers, color: "bg-red-50 text-red-700 border-red-200" },
    { title: "Backend Engineer", icon: Server, color: "bg-blue-50 text-blue-700 border-blue-200" },
    { title: "Frontend Developer", icon: Globe, color: "bg-green-50 text-green-700 border-green-200" },
    { title: "Web Application Specialist", icon: Terminal, color: "bg-pink-50 text-pink-700 border-pink-200" },
  ];

  const mainTechs = [
    { name: "React.js", bg: "bg-sky-50 text-sky-800 border-sky-300" },
    { name: "Next.js", bg: "bg-zinc-100 text-zinc-900 border-zinc-300" },
    { name: "TypeScript", bg: "bg-blue-50 text-blue-800 border-blue-300" },
    { name: "Java", bg: "bg-orange-50 text-orange-800 border-orange-300" },
    { name: "Spring Boot", bg: "bg-emerald-50 text-emerald-800 border-emerald-300" },
  ];

  return (
    <section id="home" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text Column with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-7"
          >
            

            {/* Versatile Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tight leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-rose-600 to-red-800">
                  Mom Rotha
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-800 tracking-tight">
                Full-Stack, Backend, Frontend &amp; Web Developer
              </p>
            </div>

            {/* General Versatile Introduction */}
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl font-normal">
              A versatile developer who designs and delivers end-to-end web software.
              Whether building resilient{" "}
              <strong className="font-bold text-zinc-900">backend APIs &amp; microservices</strong>{" "}
              using Java and Spring Boot, or crafting responsive, high-performance{" "}
              <strong className="font-bold text-zinc-900">frontend user interfaces</strong>{" "}
              with Next.js, React, and TypeScript, I adapt flexibly across the entire engineering stack to solve real-world problems.
            </p>

            {/* Versatile Role Capability Tags */}
            <div className="w-full space-y-2.5">
              <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Adaptable Across Domains</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {versatileRoles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <span
                      key={role.title}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-bold shadow-2xs ${role.color}`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{role.title}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Main Technologies Highlight */}
            <div className="w-full space-y-2.5 pt-1">
              <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-wider">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-2.5">
                {mainTechs.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-4 py-2 rounded-xl border text-sm sm:text-base font-bold shadow-2xs transition-transform hover:-translate-y-0.5 ${tech.bg}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (Primary Red) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-sm shadow-red-500/25 hover:shadow-md hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 hover:border-red-300 font-bold text-base shadow-xs transition-all"
              >
                <Mail className="w-5 h-5 text-zinc-600" />
                <span>Contact Me</span>
              </Link>
              <a
                href="https://t.me/rothamomm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-base shadow-xs transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Telegram</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-zinc-200/90 w-full text-zinc-600">
              <div className="flex items-center gap-3">
                <a
                  href="https://t.me/rothamomm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-sky-600 hover:border-sky-300 hover:shadow-xs transition-all"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rothamom22@gmail.com"
                  aria-label="Email"
                  className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-red-600 hover:border-red-300 hover:shadow-xs transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/momrotha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-red-600 hover:border-red-300 hover:shadow-xs transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rotha-mom-266a512ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-blue-700 hover:border-blue-400 hover:shadow-xs transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-600 font-semibold">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image / Avatar Card with Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-md">
              {/* Red themed glow */}
              <div className="absolute -inset-3 bg-linear-to-r from-red-200 via-rose-200 to-orange-200 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity"></div>

              {/* Main Card Container */}
              <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-zinc-200 shadow-xl">
                <div className="relative aspect-165/213 w-full rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt="Mom Rotha - Full-Stack, Backend, Frontend & Web Developer"
                    width={660}
                    height={852}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
