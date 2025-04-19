import { useEffect, useState } from "react";
import css from "./Header.module.css";
import Navigator from "../Navigator/Navigator";
// import img1 from '../../public/img1.jpg';



export default function Header(){
    const [scroll, setScroll] = useState();

    const handleScroll = () =>{
        const scrollY = window.scrollY;
        const maxOpacity = 0.5;
        const newOpacity = Math.min(scrollY / 300, maxOpacity);
        setScroll(newOpacity);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);

    },[]);

    return (
        <>
        <div className={css.header1} id="home">
          <div className={css.navigator}>
            <Navigator/>
          </div>
          
          {/* <img className={css.image} src={img1} alt="" /> */}

          <div
        className={css.overlay}
        style={{ opacity: scroll }}
      ></div>
  

        </div>
     
        </>
    )
}