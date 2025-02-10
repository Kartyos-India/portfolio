import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>

          <div className="projects-container">
            <div
              className={
                isDark
                  ? "dark-mode project-card project-card-dark"
                  : "project-card project-card-light"
              }
            >
              <iframe className="project-iframe"
                src="https://drive.google.com/file/d/1VgFdM3V-CLz9hELoDN9E5pZaAaCVh9jJ/preview" width="640" height="480" allow="autoplay"></iframe>
              <div className="project-detail">
                <h5
                  className={isDark ? "dark-mode card-title" : "card-title"}
                >
                  Campus Quest
                </h5>
                <p
                  className={
                    isDark ? "dark-mode card-subtitle" : "card-subtitle"
                  }
                >
                  A College Exploration Adventure is a groundbreaking project that merges gamification and education by offering an interactive virtual campus where users solve puzzles and answer trivia to boost college knowledge, foster community connections, and showcase the potential of game-based learning.
                </p>
              </div>
            </div>

            <div
              className={
                isDark
                  ? "dark-mode project-card project-card-dark"
                  : "project-card project-card-light"
              }
            >
              <iframe className="project-iframe"
                src="https://drive.google.com/file/d/1VgFdM3V-CLz9hELoDN9E5pZaAaCVh9jJ/preview" width="640" height="480" allow="autoplay"></iframe>
              <div className="project-detail">
                <h5
                  className={isDark ? "dark-mode card-title" : "card-title"}
                >
                  Cerebral Drift
                </h5>
                <p
                  className={
                    isDark ? "dark-mode card-subtitle" : "card-subtitle"
                  }
                >
                  "Cerebral Drift" is a multiplayer exploration game developed using Unreal Engine, inviting players on a mind-bending journey through vast environments filled with knowledge and discovery. As players drift through intricate landscapes, they unravel mysteries and explore the depths of both the world and the mind. With its serene yet immersive setting, "Cerebral Drift" offers a unique experience of contemplation and exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
