import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Web Development",
      description:
        "Modern, responsive and high-performance web applications using React and modern tools.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Single Page Applications",
      ],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend Development",
      description:
        "Scalable backend systems with secure APIs and optimized database architecture.",
      features: [
        "API Development",
        "Database Design",
        "Performance Optimization",
      ],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Solutions",
      description:
        "Tailor-made software solutions designed to solve real business problems.",
      features: [
        "Business Automation",
        "Custom Dashboards",
        "Scalable Architecture",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-24 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300"
        >
          I provide complete web development solutions from frontend to backend.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 h-full">

              {/* ICON */}
              <div className="text-blue-400 mb-4">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-2">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>

              {/* FEATURES */}
              <ul className="space-y-2">
                {service.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
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

export default Services;