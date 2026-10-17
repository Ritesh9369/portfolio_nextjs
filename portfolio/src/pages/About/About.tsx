
import About_Hero_Section from "./components/About_Hero_Section/About_Hero_Section";
import Experience_Journey_Section from "./components/Experience_Journey_Section/Experience_Journey_Section";
import Technologies_Section from "./components/Technical_Expertise_Section/Technical_Expertise_Section";
import How_I_Work_Section from "./components/How_Work_Section/How_Work_Section";
import Lets_Work_Together_Section from "./components/Let_Connect_Section/Let_Connect_Section";

export default function About() {
  return (
    <>
      <About_Hero_Section />
        <Experience_Journey_Section />
        <Technologies_Section />
        <How_I_Work_Section />
        <Lets_Work_Together_Section />
    </>
  );
}
