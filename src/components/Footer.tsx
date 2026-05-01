import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                MI
              </span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern, scalable and beautiful web applications that
              deliver real-world impact.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-sm">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>

            <div className="flex gap-4">

              <a
                href="https://github.com/ishaq47"
                target="_blank"
                className="p-3 rounded-lg bg-white/5 hover:bg-blue-500/20 transition group"
              >
                <Github className="group-hover:text-blue-400 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/ishaqcoder"
                target="_blank"
                className="p-3 rounded-lg bg-white/5 hover:bg-blue-500/20 transition group"
              >
                <Linkedin className="group-hover:text-blue-400 transition" />
              </a>

              <a
                href="mailto:muhammad.ishaq.pro@gmail.com"
                className="p-3 rounded-lg bg-white/5 hover:bg-blue-500/20 transition group"
              >
                <Mail className="group-hover:text-blue-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* BOTTOM */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Muhammad Ishaq. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;