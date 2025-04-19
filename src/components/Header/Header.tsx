import { useEffect, useState } from "react";
import css from "./Header.module.css";
import Navigator from "../Navigator/Navigator";

export default function Header() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxOpacity = 0.5;
    const newOpacity = Math.min(scrollY / 300, maxOpacity);
    setScroll(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={css.header1} id="home">
        <div className={css.navigator}>
          <Navigator />
        </div>

        <div className={css.overlay} style={{ opacity: scroll }}></div>
      </div>
    </>
  );
}
