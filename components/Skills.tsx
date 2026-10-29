"use client";

import {
  Code,
  Server,
  Database,
  Terminal,
  Users,
  Languages,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Microservices",
      icon: Server,
      badge: "Server & APIs",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
      skills: [
        "Java (OOP & Core)",
        "Spring Boot",
        "Spring Cloud",
        "Spring WebFlux (Reactive)",
        "Spring Security + JWT",
        "RESTful API Development",
        "Microservices Architecture",
        "Domain-Driven Design (DDD)",
        "Event-Driven (Apache Kafka)",
        "Change Data Capture (Debezium)",
        "Keycloak / OAuth2",
        "Axon Framework (CQRS)",
      ],
    },
    {
      title: "Frontend & Web UI",
      icon: Code,
      badge: "Web Client",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "ShadCN UI",
        "Redux Toolkit",
        "RTK Query",
        "HTML5 & CSS3",
        "Bootstrap 5",
        "Responsive UX/UI Design",
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      badge: "Data Layer",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis (Caching & Queues)",
        "Spring Data JPA / Hibernate",
        "Database Systems & ERD",
        "Data Modeling & Normalization",
      ],
    },
    {
      title: "DevOps & Tooling",
      icon: Terminal,
      badge: "CI/CD & Deploy",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      skills: [
        "Docker & Docker Compose",
        "NGINX Web Server",
        "Linux Fundamentals",
        "Git & GitHub",
        "Turborepo (Monorepo)",
        "Prometheus & Grafana",
        "Postman / API Testing",
      ],
    },
    {
      title: "Soft Skills & Leadership",
      icon: Users,
      badge: "Collaboration",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      skills: [
        "Teamwork & Cooperation",
        "Time Management",
        "Problem Solving",
        "Effective Communication",
        "Attention to Detail",
        "Structured Organization",
        "Mentoring Beginners",
      ],
    },
    {
      title: "Languages",
      icon: Languages,
      badge: "Communication",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      skills: [
        "Khmer (Native Language)",
        "English (Writing, Speaking, Reading, Listening)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-3.5">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Skills &amp; Competencies
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-zinc-600 font-normal">
            A comprehensive overview of my technical stack spanning backend APIs, frontend interfaces, databases, and DevOps.
          </p>
        </motion.div>

        {/* Categories Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-7 border border-zinc-200/90 shadow-xs hover:border-red-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-800 border border-zinc-200">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${category.badgeColor}`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-5">
                    {category.title}
                  </h3>

                  {/* Badges / Pill List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-xl bg-zinc-50 hover:bg-red-50 hover:text-red-700 hover:border-red-200 text-zinc-800 border border-zinc-200 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
