import React, { useState, useEffect } from "react";
import "./Images.css";

const Images = () => {
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
    <div className="image">
      <div className="border"></div>
      <div
        className="neo move-effect"
        style={{
          transform: `translate(${
            (mousePosition.x / window.innerWidth - 0.5) * -5
          }px, ${(mousePosition.y / window.innerHeight - 0.5) * -5}px)`,
        }}
      ></div>
      <div
        className="logo move-effect"
        style={{
          transform: `translate(${
            (mousePosition.x / window.innerWidth - 0.5) * -11
          }px, ${(mousePosition.y / window.innerHeight - 0.5) * -11}px)`,
        }}
      ></div>
    </div>
  );
};

export default Images;
