import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => (
          <li key={i} className="software-skill-inline" name={skill.skillName}>
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
