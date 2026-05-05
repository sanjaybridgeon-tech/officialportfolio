import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-[#050816] text-white px-10 py-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* 🔵 LEFT SIDE */}
        <div className="space-y-10">

          {/* ABOUT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-blue-500"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-400 text-lg leading-relaxed"
            >
              I am a Full Stack Developer specializing in Java and React. 
              I have experience building scalable web applications using 
              Spring Boot, REST APIs, and modern frontend technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-gray-400 text-lg leading-relaxed"
            >
              I focus on clean architecture, performance optimization, 
              and creating smooth user experiences by integrating 
              frontend and backend efficiently.
            </motion.p>
          </div>

          {/* LEADERSHIP */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold text-blue-400"
            >
              Leadership Experience
            </motion.h3>

            <div className="mt-4 space-y-4 text-gray-400">

              <div>
                <p className="text-white font-medium">
                  Social Media Head – College Arts Festival
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Managed social media campaigns and increased engagement</li>
                  <li>Coordinated promotional strategies for better visibility</li>
                </ul>
              </div>

              <div>
                <p className="text-white font-medium">
                  Publicity Head – AISA
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Led publicity initiatives for technical events</li>
                  <li>Handled communication and outreach strategies</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* 🔵 RIGHT SIDE (EDUCATION) */}
        <div className="flex items-start">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0d1117] p-6 rounded-xl border border-gray-800 shadow-lg w-full"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              Education
            </h3>

            <div className="mt-4 text-gray-400">
              <p className="text-white font-medium">
                Bachelor of Technology in Electronics and Communication Engineering
              </p>
              <p>Mar Athanasius College of Engineering, Kothamangalam</p>
              <p className="text-sm text-gray-500">2021 – 2025</p>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}