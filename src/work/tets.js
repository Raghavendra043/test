import React, { useEffect, useState } from "react";
import P from '../assets/P.svg'

export default function Test() {

    const [offsetY, setOffestY] = useState(0);

    const handleScroll = ()=> setOffestY(window.pageYOffset)

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
        <div>
            <div><img src={P} className="P1"></img></div>
            <div><img src={P} className="P1"></img></div>
            <div><img src={P} className="P1"></img></div>
            <div><img src={P} className="P1"></img></div>
            <div><img src={P} className="P1"></img></div>
            <div><img src={P} className="P1"></img></div>
            <div><img src={P} className="P1"></img></div>
            <div><img src={P} className="P1"></img></div>
        </div>
        <></>
    </div>
  );
}