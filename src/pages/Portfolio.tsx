import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { Link } from "react-router-dom";

// images
import dream from "../images/dream.png";
import kkra from "../images/kkra.jpg";
import techcreator from "../images/techcreator.png";
import lf from "../images/lf.png";
import move from "../images/move.jpg";
import madrasa from "../images/madrasa.png";
import darlingshare from "../images/darlingshare.png";
import global from "../images/global.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Move Muse (Events Platform)",
      description:
        "Full-featured event management system with booking, reviews, and ticketing system.",
      image: move,
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      liveUrl: "https://move-muse12.netlify.app",
      category: "Full Stack",
    },
    {
      title: "Global Bids",
      description:
        "Task management system with real-time collaboration and team workflows.",
      image: global,
      technologies: ["React", "Tailwind"],
      liveUrl: "#",
      category: "Web App",
    },
    {
      title: "KKRA Travel Tours",
      description:
        "Tourism platform for booking trips and exploring destinations.",
      image: kkra,
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://www.kkratraveltours.com",
      category: "Web App",
    },
    {
      title: "Link Fluencer",
      description:
        "URL shortener platform with analytics and modern UI. Secure and user-friendly.",
      image: lf,
      technologies: ["Next.js", "Tailwind"],
      liveUrl: "https://linkfluencer.io",
      category: "SaaS",
    },
    {
      title: "Tech Creator",
      description:
        "AI-powered content generation platform for blogs and marketing.",
      image: techcreator,
      technologies: ["React", "Context API"],
      liveUrl: "https://www.techcreator.co",
      category: "SaaS",
    },
    {
      title: "My Reel Dream",
      description:
        "Film collaboration platform for creators and production teams.",
      image: dream,
      technologies: ["React", "Material UI"],
      liveUrl: "https://www.myreeldream.ai",
      category: "Web App",
    },
    {
      title: "Madrasa Services System",
      description:
        "MERN system for managing queries, fatwas, and announcements.",
      image: madrasa,
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://jamiafrontend-henna.vercel.app",
      category: "MERN Stack",
    },
    {
      title: "DarlingShare",
      description:
        "Instant file sharing system using QR-based transfer. Secure and efficient.",
      image: darlingshare,
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://darlingshare.vercel.app",
      category: "Tool",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-24 px-6">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mb-16 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300"
        >
          A collection of projects I’ve built using modern web technologies.
        </motion.p>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10">

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-800 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex justify-between items-center text-sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                  >
                    <Globe size={16} /> Live
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-1 text-gray-400 hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
     <section className="max-w-4xl mx-auto text-center mt-24 pb-24 relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
  >
    <div className="bg-slate-900 rounded-2xl p-10 border border-white/10 backdrop-blur-xl">

      {/* glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl opacity-50"></div>

      <div className="relative z-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-400 mb-8">
          Have a project idea? Let’s turn it into a real-world product with modern tech.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold 
          bg-gradient-to-r from-blue-600 to-indigo-600 
          hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
        >
          Get in Touch
        </Link>

      </div>
    </div>
  </motion.div>
</section>
    </div>
  );
};

export default Portfolio;