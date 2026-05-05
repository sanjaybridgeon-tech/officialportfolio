import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_89qh6sp",
      "template_wjy9fts",
      form.current,
      "gINtddR94UDGDvROR"
    )
    .then(() => {
      setSuccess("Message sent successfully ✅");
      form.current.reset();
    })
    .catch(() => {
      setSuccess("Failed to send message ❌");
    });
  };

  return (
    <div id="contact" className="min-h-screen bg-[#050816] text-white px-10 py-20 flex items-center">

      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-500 text-center"
        >
          Contact Me
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">

          {/* 🔵 LEFT SIDE (INFO) */}
          <div className="space-y-6 text-gray-300">

            <p className="text-lg text-gray-400">
              Feel free to reach out for collaborations or opportunities.
            </p>

            <p>
              📧 
              <a href="mailto:sanjaysr2902@gmail.com" className="text-blue-400 ml-2">
                sanjaysr2902@gmail.com
              </a>
            </p>

            <p>
              📞 
              <a href="tel:+917510782632" className="text-blue-400 ml-2">
                +91 7510782632
              </a>
            </p>

            <p>
              🔗 
              <a 
                href="https://linkedin.com/in/sanjaysr2902"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 ml-2"
              >
                linkedin.com/in/sanjaysr2902
              </a>
            </p>

            <p>
              💻 
              <a 
                href="https://github.com/sanjaybridgeon-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 ml-2"
              >
                github.com/sanjaybridgeon-tech
              </a>
            </p>

          </div>

          {/* 🔵 RIGHT SIDE (FORM) */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:outline-none"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-400">{success}</p>
            )}

          </form>

        </div>

      </div>
    </div>
  );
}