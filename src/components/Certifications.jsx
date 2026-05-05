import { motion } from "framer-motion";
import javaCert from "../assets/javaCert.png";
import embeddedCert from "../assets/embeddedCert.png";

const certifications = [
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "Apr 2026",
    image: javaCert,
  },
  {
    title: "Embedded C and AVR",
    issuer: "Verdant IT Solutions",
    date: "Feb 2024",
    image: embeddedCert,
  },
];

export default function Certifications() {
  return (
    <div id="certifications" className="min-h-screen bg-[#050816] text-white px-10 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-500"
        >
          Certifications
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0d1117] p-6 rounded-xl border border-gray-800 shadow-lg"
            >

              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              {/* Details */}
              <p className="text-gray-400 mt-2">
                {cert.issuer}
              </p>

              <p className="text-gray-500 text-sm">
                {cert.date}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}