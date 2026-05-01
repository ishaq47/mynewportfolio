import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Sparkles } from "lucide-react";
import ishaq from "../images/ishaq.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        
        {/* Background glow */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
          
          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm"
            >
              <Sparkles size={16} />
              Available for Freelance
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Muhammad Ishaq
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              I build modern, scalable, and visually stunning web applications
              that help businesses grow and stand out in the digital world.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:scale-105 transition-all"
              >
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                View Work
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

            <img
              src={ishaq}
              alt="Ishaq"
              className="relative w-72 md:w-96 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I Do
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I provide high-quality web development services focused on performance,
            design, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {[
            {
              icon: <Layout className="w-10 h-10" />,
              title: "Frontend Development",
              desc: "Modern UI with React, Tailwind, and smooth animations.",
            },
            {
              icon: <Code className="w-10 h-10" />,
              title: "Full Stack Apps",
              desc: "Robust apps with APIs, authentication, and databases.",
            },
            {
              icon: <Sparkles className="w-10 h-10" />,
              title: "Custom Solutions",
              desc: "Tailored systems designed for your business needs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-[1.02] transition"
            >
              <div className="bg-slate-900 rounded-2xl p-6 h-full border border-white/10">
                <div className="mb-4 text-blue-400">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;