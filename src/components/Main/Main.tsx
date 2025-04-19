import { useEffect } from "react";
import css from "./Main.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <h1 className={css.h1} id="main">
        {" "}
        Full Stack Developer
      </h1>
      <div className={css.content}>
        <div className={css.pic2}></div>

        <p className={css.mainText} data-aos="fade-left" data-aos-delay="500">
          Hi, I'm Ihor,
          <br />
          Passionate and adaptable Full Stack developer with a background in the
          arts. Long time use to live in Middle East, I can see different vision
          for developing and customer service. Dedicated to leveraging
          technology to create meaningful solutions. I thrive in dynamic
          environments and have a proven track record of successfully navigating
          and contributing to transformative periods.{" "}
        </p>
      </div>
    </>
  );
}
