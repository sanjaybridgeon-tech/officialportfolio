import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  const sections = ["about", "projects", "certifications", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-500">
          Portfolio
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-gray-300">

          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`capitalize transition ${
                active === sec
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              {sec}
            </button>
          ))}

        </div>

      </div>
    </div>
  );
}