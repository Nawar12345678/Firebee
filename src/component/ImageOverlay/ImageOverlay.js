import React from 'react';
import './ImageOverlay.css'; 
import top1 from '../../assets/top1.png'; 
import top2 from '../../assets/top2.png'; 

const ImageOverlay = () => {
  return (
    <div className="image-container">
      <img src={top1} alt="Background" className="image-background" />
      <img src={top2} alt="Overlay" className="image-overlay" />
      <div className="overlay-text">BLACK FRIDAY SALE - SAVE $100</div> 
       </div>
  );
};

export default ImageOverlay;
