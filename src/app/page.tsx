import Navbar   from "@/components/Navbar";
import Hero      from "@/components/sections/Hero";
import About     from "@/components/sections/About";
import Services  from "@/components/sections/Services";
import Projects  from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact   from "@/components/sections/Contact";
import Footer    from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
