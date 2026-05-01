import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_3ip4sum";
    const templateID = "template_l4w4oih";
    const userID = "UTd7P8j2yf4pl6MGx";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setShowMessage(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setShowMessage(false), 4000);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-24 px-6 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      {/* SUCCESS TOAST */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 right-6 bg-green-500/90 backdrop-blur text-white px-5 py-3 rounded-xl shadow-xl z-50"
        >
          Message sent successfully 🚀
        </motion.div>
      )}

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300"
        >
          Let’s build something amazing together. I’m always open to freelance
          work and collaborations.
        </motion.p>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-20 relative z-10">

        {[
          {
            icon: <Mail size={30} />,
            title: "Email",
            value: "muhammad.ishaq.pro@gmail.com",
          },
          {
            icon: <Phone size={30} />,
            title: "Phone",
            value: "+92 344 1898887",
          },
          {
            icon: <MapPin size={30} />,
            title: "Location",
            value: "Swabi, Pakistan",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            <div className="bg-slate-900 p-6 rounded-2xl text-center border border-white/10">
              <div className="text-blue-400 flex justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm break-words">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FORM */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 p-8 rounded-2xl space-y-5"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              Send a Message
            </h2>

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-slate-800 border border-white/10 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-slate-800 border border-white/10 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-slate-800 border border-white/10 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message..."
              className="w-full bg-slate-800 border border-white/10 px-4 py-3 rounded-lg outline-none focus:border-blue-500"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;