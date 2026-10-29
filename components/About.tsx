"use client";

import Image from "next/image";
import {
  Layers,
  HeartHandshake,
  Lightbulb,
  CheckCircle,
  Server,
  Sparkles,
  Code2,
} from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      icon: Layers,
      title: "Full-Stack & Web Engineering",
      description:
        "Building end-to-end web applications with seamless communication between frontends, APIs, and background processes.",
      color: "text-red-600",
      bg: "bg-red-50 border-red-200",
    },
    {
      icon: Server,
      title: "Backend & Microservices",
      description:
        "Designing high-throughput REST APIs, Spring Boot microservices, Kafka event streaming, and database models.",
      color: "text-orange-600",
      bg: "bg-orange-50 border-orange-200",
    },
    {
      icon: Code2,
      title: "Modern Frontend Interfaces",
      description:
        "Creating dynamic, fast user interfaces with React, Next.js, TypeScript, Tailwind CSS, and component systems like Shadcn UI.",
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
    },
    {
      icon: HeartHandshake,
      title: "Mentorship & Volunteering",
      description:
        "Teaching volunteer at Sisters of Code (SoC), helping beginner students master coding concepts and structured thinking.",
      color: "text-rose-600",
      bg: "bg-rose-50 border-rose-200",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Full-Stack Flexibility",
    "Teamwork & Collaboration",
    "Continuous Learning",
    "Time Management",
    "Attention to Detail",
    "Structured Communication",
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-bold mb-3.5 border border-red-200">
            <Lightbulb className="w-4 h-4 text-red-600" />
            <span>Versatile &amp; Adaptable</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-zinc-600 font-normal">
            A developer prepared to take on backend, frontend, full-stack, or modern web engineering roles with high dedication.
          </p>
        </motion.div>

        {/* Narrative & Visual Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main Story (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-zinc-700 leading-relaxed text-lg sm:text-xl font-normal"
          >
            <p>
              I am a flexible and motivated developer with a degree in{" "}
              <strong className="text-zinc-900 font-bold">
                Computer Science from The University of Cambodia
              </strong>
              . Rather than confining myself to a single discipline, I bring well-rounded capabilities across{" "}
              <strong className="text-red-600 font-bold">backend engineering</strong>,{" "}
              <strong className="text-red-600 font-bold">frontend development</strong>, and{" "}
              <strong className="text-red-600 font-bold">full-stack web architecture</strong>.
            </p>

            <p>
              Throughout my academic studies and intensive professional training at the{" "}
              <strong className="text-zinc-900 font-bold">
                Institute of Science and Technology Advanced Development (ISTAD)
              </strong>
              , I have gained hands-on experience building systems from concept to production. When working on the backend, I design reliable RESTful APIs, microservices, and databases using{" "}
              <span className="text-zinc-900 font-bold">Java, Spring Boot, PostgreSQL, and Kafka</span>. When focused on frontend and web applications, I craft fast, responsive user interfaces using{" "}
              <span className="text-zinc-900 font-bold">Next.js, React, TypeScript, and Tailwind CSS</span>.
            </p>

            <p>
              My background as a{" "}
              <strong className="text-zinc-900 font-bold">Teaching Volunteer at Sisters of Code (SoC)</strong>{" "}
              has also strengthened my communication, patience, and team collaboration skills, enabling me to explain complex technical ideas clearly and integrate smoothly into any engineering team.
            </p>

            {/* Core Values / Soft Skills Badges */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Key Professional Strengths</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-red-50 hover:text-red-700 hover:border-red-200 text-zinc-800 text-sm sm:text-base font-semibold border border-zinc-200 shadow-2xs transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Architecture & Code Illustration (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-lg bg-zinc-900 group">
              <Image
                src="/about-illustration.svg"
                alt="Mom Rotha Developer Architecture and Code Mockup"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </motion.div>
        </div>

        {/* 4 Quick Highlight Cards at the bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-red-200 hover:bg-white transition-all hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-xs group-hover:scale-105 transition-transform mb-4 ${item.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
