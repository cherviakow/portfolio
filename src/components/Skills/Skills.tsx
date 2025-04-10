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





export default function Skills(){

    return(
<>
        <h1 className={css.skills}>Skills</h1>

        <div className={css.skillsIcons}>

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

</>
    )
}