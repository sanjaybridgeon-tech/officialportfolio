import { motion } from "framer-motion";
import car from "../assets/projectcar.png";
import anime from "../assets/projectanime.png";

const projects = [
  {
    title: "Anime Store",
    desc: "Full stack app using React & Spring Boot with product management.",
    link: "https://anime-premium.vercel.app",
    github: "https://github.com/sanjaybridgeon-tech", // 🔥 replace with your repo
    image: anime,
  },
  {
    title: "E-Commerce App",
    desc: "Modern UI with cart, wishlist, and checkout features.",
    link: "https://car-beryl-three.vercel.app/",
    github: "https://github.com/sanjaybridgeon-tech", // 🔥 replace with your repo
    image: car,
  },
];

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-[#050816] text-white px-10 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-500"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0d1117] p-6 rounded-xl border border-gray-800 shadow-lg"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">

                {/* Live Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live
                  </motion.button>
                </a>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-400 transition"
                  >
                    GitHub
                  </motion.button>
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}