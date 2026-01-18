import About from "@/components/About";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-black font-code">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </main>
  );
}
