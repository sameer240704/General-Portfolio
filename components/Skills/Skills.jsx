import { useState } from "react";
import SkillsCard from "./SkillsCard";
import SkillsNumber from "./SkillsNumber";
import {
  webSkillsData,
  gameSkillsData,
  appSkillsData,
} from "@/constants/skillsData";

const Skills = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <div className="h-[90vh] w-screen relative flex justify-center items-center px-20">
      <div
        className="left-side w-[60%] flex flex-col gap-3 tilted-container pl-20"
        style={{
          animation: "slideRight 0.5s forwards",
        }}
      >
        {/* Web Dev  */}

        <SkillsCard
          skillsData={webSkillsData}
          className={`grid-cols-4 ${
            hoveredElement === "Web Dev" ? "unblurred" : "blurred"
          }`}
          onMouseEnter={() => setHoveredElement("Web Dev")}
          onMouseLeave={() => setHoveredElement(null)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Game Dev  */}

          <SkillsCard
            skillsData={gameSkillsData}
            className={`grid-cols-2 ${
              hoveredElement === "Game Dev" ? "unblurred" : "blurred"
            }`}
            onMouseEnter={() => setHoveredElement("Game Dev")}
            onMouseLeave={() => setHoveredElement(null)}
          />

          {/* App Dev */}

          <SkillsCard
            skillsData={appSkillsData}
            className={`grid-cols-2 ${
              hoveredElement === "App Dev" ? "unblurred" : "blurred"
            }`}
            onMouseEnter={() => setHoveredElement("App Dev")}
            onMouseLeave={() => setHoveredElement(null)}
          />
        </div>
      </div>

      <SkillsNumber hoveredElement={hoveredElement} />
    </div>
  );
};

export default Skills;
