import React from 'react';
import './Box.css'; 
import box2 from '../../assets/box2.png'
import box from '../../assets/box.png'
import check from '../../assets/check.png'




const Box = () => {
    return (
        <div className="box-wrapper">
            <h1 className="box-title">What’s in the box?</h1>
            <div className="box-image-wrapper">
                <img src={box} alt="Box" className="box-image" />
            </div>
            <div className="box-featured-on">
                <p>FEATURED ON</p>
                <div className="box-logos">
                    <img src= {box2} alt="GQ" />
                  </div>
            </div>
            <div className="box-line"></div>

            <div className="box-items">
                <div className="box-item">
                    <img src={check} alt="Check" className="box-check-icon" />
                    <p>1 Firebee headband</p>
                </div>
                <div className="box-item">
                    <img src={check} alt="Check" className="box-check-icon" />
                    <p>1 Charging cable</p>
                </div>
                <div className="box-item">
                    <img src={check} alt="Check" className="box-check-icon" />
                    <p>1 User manual</p>
                </div>
            </div>
        </div>
    );
};

export default Box;
