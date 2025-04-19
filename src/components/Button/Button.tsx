import { useState, useEffect } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import css from "./Button.module.css";

export default function Button() {
  const [scrollButton, setscrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setscrollButton(scrollTop > windowHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    scrollButton && (
      <button className={css.scrollToTop} onClick={scrollToTop}>
        <HiArrowCircleUp className={css.icon} />
        <span className={css.top}>Back to Top</span>
      </button>
    )
  );
}
