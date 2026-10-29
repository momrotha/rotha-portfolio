import Link from "next/link";
import { Code2, ArrowUp, Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info with Red Accent */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm shadow-red-500/25">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-tight text-zinc-900">
                Mom Rotha
              </span>
            </Link>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-sm font-normal">
              Versatile Developer ready to deliver in Full-Stack, Backend APIs, Frontend, and Web Application engineering roles.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/rothamomm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 hover:text-sky-600 hover:bg-zinc-200 transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:rothamom22@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 hover:text-red-600 hover:bg-zinc-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/momrotha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 hover:text-red-600 hover:bg-zinc-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rotha-mom-266a512ba/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 hover:text-blue-700 hover:bg-zinc-200 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-zinc-900 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm sm:text-base font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-600 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to top & Info with Red hover */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-red-50 hover:text-red-600 text-zinc-800 text-sm font-bold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </a>
            <p className="text-sm text-zinc-500 font-medium">
              Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Mom Rotha. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-medium">
            <span>Built with Next.js, Tailwind CSS &amp; Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
