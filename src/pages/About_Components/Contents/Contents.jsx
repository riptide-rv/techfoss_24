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
        <p className="content text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ">
          This annual event has been a cornerstone in fostering a vibrant tech
          community, and this year promises to be another chapter in our legacy.
          Techfoss serves as a dynamic platform where students, professionals,
          and tech enthusiasts unite to explore the latest trends, participate
          in competitions, and engage in enriching workshops. As we celebrate
          our 11th year, we invite you to join us in this journey of discovery
          and advancement.
        </p>
        
        <div className="blinky"></div>    
      </div>

      <div className="line"></div>
      <div className="uline"></div>
    </div>
  );
};

export default Contents;
