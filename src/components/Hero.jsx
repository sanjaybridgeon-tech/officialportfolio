import { motion } from "framer-motion";
import image from "../assets/image.png";

export default function Hero() {

  // 🔥 Scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center px-10 relative overflow-hidden">

      {/* 🔵 Background glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sanjay
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-400 text-lg"
          >
            Full Stack Developer specializing in Java & React.
            I build scalable systems with clean architecture.
          </motion.p>

          {/* 🔥 Buttons */}
          <div className="mt-8 flex gap-4">

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("projects")}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg"
            >
              View Projects
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contact")}
              className="px-6 py-2 border border-gray-600 hover:border-blue-400 rounded-lg"
            >
              Contact Me
            </motion.button>

          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative"
        >
          {/* 🔵 Glow behind image */}
          <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src={image}
            alt="Sanjay"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg relative"
          />
        </motion.div>

      </div>
    </div>
  );
}