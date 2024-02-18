import React, { useState, useEffect } from "react";
import "./Contents.css";

const Contents = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  

  return (
    <div>
      <div
        className="box1 mouse-effect"
        style={{
          transform: `translate(${
            (mousePosition.x / window.innerWidth - 0.5) * 2
          }px, ${(mousePosition.y / window.innerHeight - 0.5) * 5}px)`,
        }}
      ></div>
      <div
        className="box2 mouse-effect"
        style={{
          transform: `translate(${
            (mousePosition.x / window.innerWidth - 0.5) * 5
          }px, ${(mousePosition.y / window.innerHeight - 0.5) * 5}px)`,
        }}
      ></div>
      <div
        className="intersection mouse-effect"
        style={{
          transform: `translate(${
            (mousePosition.x / window.innerWidth - 0.5) * 10
          }px, ${(mousePosition.y / window.innerHeight - 0.5) * 10}px)`,
        }}
      >
        <p className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat non,
          et sed, ducimus quaerat eaque repellat fuga nam adipisci
          exercitationem expedita atque velit deserunt magni animi itaque. Iste
          suscipit fugiat ut ea aut sint eligendi perspiciatis similique nostrum
          vitae veritatis ducimus possimus quam, aliquam, tempore sit! Facilis
          consequuntur voluptas at! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro, sapiente. Nostrum, aliquam enim reprehenderit
          at vitae eveniet iste ea ad!
        </p>
        <span></span>
        <div
          className="blinky"
          
        ></div>
      </div>
      
      <div className="line"></div>
      <div className="uline"></div>
    </div>
  );
};

export default Contents;
