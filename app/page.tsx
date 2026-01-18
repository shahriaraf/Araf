import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-black">
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </main>
  );
}
