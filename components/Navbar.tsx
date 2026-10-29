"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#f3f4f6]/95 backdrop-blur-md shadow-sm border-b border-zinc-200"
          : "bg-[#f3f4f6] border-b border-zinc-200/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Red Accent */}
          <Link
            href="#home"
            className="flex items-center gap-3 text-zinc-900 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-500/20 group-hover:scale-105 group-hover:bg-red-700 transition-all duration-200">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl leading-tight tracking-tight text-zinc-900">
                Mom Rotha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Red Active State */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-red-600 rounded-full shadow-sm shadow-red-600/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Download CV Action Button (Primary Red) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="./CV_Mom_Rotha.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-sm shadow-red-500/25 hover:shadow-md hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-zinc-800 hover:text-red-600 hover:bg-zinc-200 focus:outline-hidden transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-xl px-5 pt-4 pb-6 space-y-3 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                      isActive
                        ? "bg-red-600 text-white shadow-xs"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-zinc-100">
              <a
                href="./CV_Mom_Rotha.pdf"
                onClick={() => setIsOpen(false)}
                target="_blank"
                className="target=_blank w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-base font-bold transition-colors shadow-sm shadow-red-500/25"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
