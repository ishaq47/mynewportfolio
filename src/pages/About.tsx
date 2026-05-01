import React from "react";
import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML / CSS", level: 90 },
    { name: "Responsive Design", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "React JS", level: 90 },
    { name: "Context API", level: 90 },
    { name: "Redux Toolkit", level: 60 },
    { name: "Node JS", level: 70 },
    { name: "Express JS", level: 70 },
    { name: "MongoDB", level: 60 },
    { name: "Laravel", level: 50 },
  ];

  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Tech Creator Swabi",
      period: "2023 - Dec 2024",
      description:
        "Worked on multiple client projects using React, MUI, Tailwind and Node.js. Built responsive UI and improved backend integration.",
    },
    {
      title: "Frontend Web Developer",
      company: "Ideation Islamabad",
      period: "Jan 2025 - Mar 2025",
      description:
        "Developed a Tamasha App clone using Laravel with dynamic UI and scalable architecture.",
    },
    {
      title: "Frontend Web Developer",
      company: "ObsidianRCM Abbottabad",
      period: "Mar 2025 - Present",
      description:
        "Building a medical billing system using React and MUI with focus on performance and UX.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-20 px-6">

      {/* Background glow */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg"
        >
          I'm a passionate Full Stack Developer focused on building modern,
          scalable, and visually appealing web applications.
        </motion.p>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto mb-24 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
            >
              <div className="bg-slate-900 p-5 rounded-2xl border border-white/10">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>

                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto mb-24 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
            >
              <div className="bg-slate-900 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-blue-400 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-3xl mx-auto pb-24 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
        >
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 text-center">
            <h3 className="text-xl font-bold">
              Bachelor of Computer Science (Software)
            </h3>
            <p className="text-blue-400">
              Abdul Wali Khan University Mardan, Pakistan
            </p>
            <p className="text-gray-400 text-sm">2019 - 2023</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;