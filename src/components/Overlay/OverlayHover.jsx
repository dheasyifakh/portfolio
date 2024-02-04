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
            <div class="middle">
                <div class="text">
                    <a href={linkWeb} target='_blank' style={{fontSize: "28px"}}>
                        <FaEye/>
                    </a>
                </div>
            </div>
        </div>}
    </div>
  );
};

export default OverlayHover;
