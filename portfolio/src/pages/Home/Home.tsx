
import Hero_Section from "./components/Hero_Scetion/Hero_Scetion";
import About_Section from "./components/About_Scetion/About_Scetion";
import Skills_Section from "./components/Skills_Section/Skills_Section";
import Projects_Section from "./components/Project_Section/Project_Section";
import Contact_Section from "./components/Contact_Section/Contact_Section";

export default function Home() {
  return (
    <>
      <Hero_Section />
      <About_Section />
      <Skills_Section />
      <Projects_Section />
      <Contact_Section/>
    </>
  );
}
