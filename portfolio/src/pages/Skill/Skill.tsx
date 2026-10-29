
import FrontendSkills_Section from "./components/FrontendSkills_Section/FrontendSkills_Section";
import BackendSkills_Section from "./components/BackendSkills_Section/BackendSkills_Section";
import DatabaseSkills_Section from "./components/DatabaseSkills_Section/DatabaseSkills_Section";
import MobileSkills_Section from "./components/MobileSkills_Section/MobileSkills_Section";
import ApiIntegration_Section from "./components/ApiIntegration_Section/ApiIntegration_Section";
import DevelopmentPractices_Section from "./components/DevelopmentPractices_Section/DevelopmentPractices_Section";
import ToolsSkills_Section from "./components/ToolsSkills_Section/ToolsSkills_Section";
import UiUxSkills_Section from "./components/UiUxSkills_Section/UiUxSkills_Section";

export default function Skill() {
  return (
    <>
      <FrontendSkills_Section />
        <BackendSkills_Section />
        <DatabaseSkills_Section />
        <MobileSkills_Section />
        <ApiIntegration_Section />
        <DevelopmentPractices_Section />
        <ToolsSkills_Section />
        {/* <UiUxSkills_Section /> */}
    </>
  );
}
