import css from "./Skills.module.css";
import html from "../../public/html.png";
import csss from "../../public/css.png";
import javascript from "../../public/javascript.png";
import typescript from "../../public/typescript.png";
import bootstrap from "../../public/bootstrap.png";
import react from "../../public/react.png";
import nodejs from "../../public/nodejs.png";
import github from "../../public/github.png";
import figma from "../../public/figma.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <h1 className={css.skills} id="skills">
        Skills
      </h1>

      <div className={css.skillsIcons}>
        <div data-aos="fade-left">
          <img src={html} alt="html" />
          <img src={csss} alt="css" />
          <img src={bootstrap} alt="bootstrap" />
          <img src={javascript} alt="javascript" />
          <img src={typescript} alt="typescript" />
          <img src={react} alt="react" />
          <img src={nodejs} alt="nodejs" />
          <img src={github} alt="github" />
          <img src={figma} alt="figma" />
        </div>
      </div>
    </>
  );
}
