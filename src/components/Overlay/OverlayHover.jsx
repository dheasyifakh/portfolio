import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";

const OverlayHover = ({ children, linkWeb }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="overlay-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && <div className="overlay">
            <div className="middle">
                <div className="text">
                    <a href={linkWeb} target='_blank' style={{fontSize: "28px",color:"white"}}>
                        <FaEye/>
                    </a>
                </div>
            </div>
        </div>}
    </div>
  );
};

export default OverlayHover;
