import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import RadialMenu from "@/components/RadialMenu";

export default function Home() {
  return (
    <main className="bg-black font-code">
      <RadialMenu></RadialMenu>
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
