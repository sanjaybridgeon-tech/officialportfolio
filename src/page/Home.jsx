import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import Projects from "../components/Project";
export default function Home() {
  return (
    <>
      <Hero />
      <Cursor/>   
      <About/>
      <Projects />
      <Certifications/>
      <Contact/>
    </>
  );
}