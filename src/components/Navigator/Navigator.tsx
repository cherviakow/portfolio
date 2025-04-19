import css from "./Navigator.module.css";

export default function Navigator(){


    return(
        <nav className={css.nav}>
         
            <a href="#main">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#contacts">Contacts</a>
        </nav>
    )
}