import { useEffect } from "react";
import css from "./Navigator.module.css";
import AOS from "aos";

export default function Navigator() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <nav className={css.nav} data-aos="fade-down">
      <a href="#main">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#contacts">Contacts</a>
    </nav>
  );
}
