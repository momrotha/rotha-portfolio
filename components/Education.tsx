"use client";

import {
  GraduationCap,
  Award,
  Calendar,
  Building,
  Heart,
  UserCheck,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";

export default function Education() {
  const formalEducation = [
    {
      institution: "The University of Cambodia",
      degree: "Bachelor of Computer and Science",
      period: "2023 – Present",
      description:
        "Comprehensive academic training in computer science foundations, algorithms, object-oriented systems (C++, Java), database systems (SQL Server, MySQL), operating systems, data communications, and software architecture.",
      highlights: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++, Java)",
        "Database Systems & ERD Design",
        "Web Development & Spring Boot Framework",
        "DevOps & Artificial Intelligence Fundamentals",
      ],
    },
    {
      institution: "Hun Sen Tuek Phos High School",
      degree: "BacII National Certificate",
      period: "2020 – 2022",
      description:
        "High school national examination certificate with strong academic performance in sciences and mathematics.",
      highlights: ["National BacII Certificate", "Mathematics & Science Track"],
    },
  ];

  const professionalTraining = [
    {
      title: "Advanced Course – Spring Microservice",
      institution: "Institute of Science and Technology Advanced Development (ISTAD)",
      period: "Nov 2025 – June 2026",
      details: "6 months intensive (Mon–Fri, 4 hrs/day)",
      topics: [
        "Spring Boot & Spring Cloud Fundamentals",
        "Reactive Programming with Spring WebFlux",
        "Event-Driven Architecture (EDA) & Apache Kafka",
        "Change Data Capture (CDC) with Debezium",
        "OAuth2, JWT & Keycloak Security Flows",
        "Microservices Decomposition & CQRS (Axon Framework)",
        "Resiliency: Circuit Breaker, Retry, Rate Limiter",
        "Observability: Prometheus, Grafana, OpenTelemetry, Centralized Logging",
        "Docker & Docker Compose Multi-Environment Deployments",
        "API Gateway, BFF Pattern, and Token Handler",
      ],
    },
    {
      title: "Full Stack Web Development Course",
      institution: "Institute of Science and Technology Advanced Development (ISTAD)",
      period: "March 2025 – October 2025",
      details: "6 months intensive (Mon–Fri, 4 hrs/day)",
      topics: [
        "Core Java, OOP principles, Database Connectivity",
        "Modern Frontend: React.js, Next.js, TypeScript, Tailwind CSS",
        "Spring Boot, JPA, RESTful Web Services, Spring Security, JWT",
        "PostgreSQL & Data Modeling",
        "NGINX Web Server Configuration & Docker Compose",
        "Git Version Control & Agile/Waterfall SDLC",
      ],
    },
    {
      title: "Foundation IT Course",
      institution: "Institute of Science and Technology Advanced Development (ISTAD)",
      period: "February 2024 – August 2024",
      details: "4 months intensive",
      topics: [
        "Frontend fundamentals: HTML5, CSS3, JavaScript, React.js",
        "Backend basics: Java OOP concepts",
        "Git version control & teamwork collaboration",
      ],
    },
  ];

  const volunteer = {
    role: "Teaching Volunteer",
    organization: "Sisters of Code (SoC)",
    period: "February 2024 – December 2025",
    bullets: [
      "Delivered structured lessons on web development fundamentals including HTML, CSS, and website building",
      "Taught introductory programming using Code.org and Scratch to build computational thinking",
      "Facilitated introductory sessions on Artificial Intelligence (AI) for beginner learners",
      "Mentored students with hands-on coding exercises, nurturing problem-solving and confidence",
    ],
  };

  const references = [
    {
      name: "Mr. Chan Chhaya",
      position: "Senior Software Engineer",
      organization: "Institute of Science and Technology Advanced Development (ISTAD)",
      phone: "098 459 947",
      email: "it.chhaya@gmail.com",
    },
    {
      name: "Ms. Mom Reksmey",
      position: "Deputy Director",
      organization: "Institute of Science and Technology Advanced Development (ISTAD)",
      phone: "085 522 690",
      email: "it.reksmey@gmail.com",
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-3.5">
            <GraduationCap className="w-4 h-4 text-red-600" />
            <span>Academic &amp; Training</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Education &amp; Professional Training
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-zinc-600 font-normal">
            Formal computer science degree, specialized full-stack and microservices training, and teaching volunteer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Formal Education & Volunteering (Left Column) */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 flex items-center gap-2.5">
              <Building className="w-6 h-6 text-red-600" />
              <span>University &amp; General Education</span>
            </h3>

            {formalEducation.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-zinc-200 shadow-xs hover:border-red-200 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg sm:text-xl font-bold text-zinc-900">
                    {edu.degree}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-red-600">
                  {edu.institution}
                </p>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {edu.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-800"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Volunteer Activity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl p-7 border border-zinc-200 shadow-xs hover:border-red-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900">
                      {volunteer.role}
                    </h4>
                    <p className="text-sm font-bold text-red-600">
                      {volunteer.organization}
                    </p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700">
                  {volunteer.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-zinc-600 font-normal">
                {volunteer.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Professional Courses (Right Column) */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 flex items-center gap-2.5">
              <Award className="w-6 h-6 text-red-600" />
              <span>Specialized Training (ISTAD)</span>
            </h3>

            {professionalTraining.map((prog, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: pIdx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-zinc-200 shadow-xs hover:border-red-200 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg sm:text-xl font-bold text-zinc-900">
                    {prog.title}
                  </h4>
                  <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 shrink-0">
                    {prog.period}
                  </span>
                </div>
                <p className="text-sm font-bold text-zinc-500">
                  {prog.institution} • {prog.details}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-extrabold text-zinc-700 uppercase tracking-wider">
                    Core Curriculum:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prog.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* References Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-xs"
        >
          <div className="flex items-center gap-3 mb-8">
            <UserCheck className="w-6 h-6 text-red-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Professional References &amp; Availability
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#f3f4f6] border border-zinc-200 hover:border-red-200 transition-colors space-y-2.5"
              >
                <h4 className="text-base sm:text-lg font-bold text-zinc-900">{ref.name}</h4>
                <p className="text-sm font-semibold text-zinc-600">
                  {ref.position} • {ref.organization}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-700 pt-2 font-medium">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>{ref.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-red-500" />
                    <span>{ref.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
