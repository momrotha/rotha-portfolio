"use client";

import Image from "next/image";
import {
  FolderGit2,
  Calendar,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      title: "ISTAD INSIGHT",
      subtitle: "Unified Enterprise Platform (Microservices & Web)",
      timeline: "Nov 2025 – June 2026",
      organization: "Institute of Science and Technology Advanced Development (ISTAD)",
      image: "/projects/istad-insight.svg",
      imageAlt: "ISTAD INSIGHT Microservices Dashboard Architecture",
      description:
        "A unified digital platform designed to migrate and combine various existing ISTAD systems into a single, scalable application. Bridges microservices backend with modern micro-frontend web clients.",
      tags: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Next.js",
        "Turborepo",
        "Redis",
        "REST APIs",
        "Tailwind CSS",
        "ShadCN UI",
        "Docker",
        "MinIO",
        "CDC Debezium",
      ],
      responsibilities: [
        "Architect and build scalable microservices and RESTful API endpoints",
        "Design overall system architecture, database models, and responsive web UX/UI",
        "Apply Domain-Driven Design (DDD) principles across bounded contexts",
        "Implement Change Data Capture (CDC) to capture and track real-time data events across microservices",
        "Build modern micro-frontend architecture with Turborepo and Next.js",
        "Seamlessly integrate RESTful APIs connecting microservices to frontend web clients",
      ],
      badge: "Backend Microservices & Next.js",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
    },
    {
      title: "STACKQUIZ",
      subtitle: "Real-Time Interactive Live Quiz Platform",
      timeline: "March 2025 – October 2025",
      organization: "Institute of Science and Technology Advanced Development (ISTAD)",
      image: "/projects/stackquiz.svg",
      imageAlt: "STACKQUIZ Live WebSockets Quiz Arena and Leaderboard",
      description:
        "A real-time interactive quiz platform where organizers create and launch quizzes for participants to join and play in synchronized live sessions with instant scoring and WebSockets.",
      tags: [
        "Spring Boot",
        "WebSockets",
        "Keycloak",
        "JWT",
        "Next.js",
        "RTK Query",
        "Spring Data JPA",
        "Docker",
        "Nginx",
        "Shadcn UI",
      ],
      responsibilities: [
        "Lead and coordinate team members for feature delivery and sprint cycles",
        "Developed responsive Next.js web dashboard with reusable Shadcn UI components",
        "Engineered real-time WebSockets synchronization for live quiz participants",
        "Fetched and cached server state using RTK Query for efficient data flows",
        "Designed database structures, ERD diagrams, and complex relationships",
        "Integrated robust SSO & authorization with Keycloak and JWT tokens",
      ],
      badge: "Full-Stack & WebSockets",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    },
    {
      title: "JOB QUICK",
      subtitle: "Modern Job Search & Opportunity Portal",
      timeline: "February 2024 – August 2024",
      organization: "Institute of Science and Technology Advanced Development (ISTAD)",
      image: "/projects/job-quick.svg",
      imageAlt: "Job Quick Modern Job Portal Interface and Search Filters",
      description:
        "A clean job searching platform that allows candidates to browse and search for job listings, view recommended and saved positions, and inspect detailed job specifications.",
      tags: [
        "React.js",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "REST APIs",
        "UX/UI Design",
      ],
      responsibilities: [
        "Designed clean, user-centric UX/UI wireframes and interactive workflows",
        "Developed modern interactive frontend with React.js and Tailwind CSS",
        "Implemented global state management for saved jobs using Redux Toolkit",
        "Integrated REST APIs for job search, filtering, and recommendations",
        "Ensured complete cross-device responsiveness on mobile, tablet, and desktop",
      ],
      badge: "Frontend & Web App",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white border-y border-zinc-200">
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
            <FolderGit2 className="w-4 h-4 text-red-600" />
            <span>Featured Systems &amp; Web Apps</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Key Software Projects
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-zinc-600 font-normal">
            Real-world backend microservices, full-stack platforms, and interactive web applications developed in team environments.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#f3f4f6] rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm hover:border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Visual Project Image Showcase Banner */}
              <div className="mb-8 rounded-2xl overflow-hidden border border-zinc-300/80 shadow-md bg-zinc-950 group relative">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full border ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-zinc-600 font-semibold ml-auto sm:ml-0">
                      <Calendar className="w-4 h-4 text-red-500" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg font-bold text-red-600 mt-1">
                      {project.subtitle}
                    </p>
                    <p className="text-sm font-medium text-zinc-500 mt-0.5">
                      {project.organization}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="pt-2">
                    <p className="text-xs font-extrabold text-zinc-700 uppercase tracking-wider mb-2.5">
                      Technologies &amp; Architecture
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-white text-zinc-800 rounded-xl border border-zinc-200 hover:border-red-200 shadow-2xs transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Responsibilities Column */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-zinc-200 shadow-xs">
                  <h4 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-red-600" />
                    <span>My Contributions &amp; Roles</span>
                  </h4>
                  <ul className="space-y-3">
                    {project.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 leading-snug font-normal"
                      >
                        <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-sm text-zinc-500 font-medium">
                      Project Reference
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                    >
                      <span>Inquire Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
