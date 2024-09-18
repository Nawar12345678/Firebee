import React from 'react';
import './ProductDisplay.css'; 

import logo1 from '../../assets/ICNIRP.png'; 
import logo2 from '../../assets/FC.png'; 
import cros1 from '../../assets/cros1.png';
import crosSmall1 from '../../assets/cros1.png';
import crosSmall2 from '../../assets/cros2.png';
import crosSmall3 from '../../assets/cros3.png'; 
import crosSmall4 from '../../assets/cros4.png'; 
import crosSmall5 from '../../assets/cros5.png'; 


import icon1 from '../../assets/icon1.svg'; 
import icon2 from '../../assets/icon2.svg'; 
import icon3 from '../../assets/icon3.svg'; 
import icon4 from '../../assets/icon4.svg';
import check from '../../assets/check.png'

import stars from '../../assets/stars.svg';
import oldprice from '../../assets/oldprice.png';
import price from '../../assets/price.png';
import arrow from '../../assets/arrow.svg';
import logos from '../../assets/logos.png'

const ProductDisplay1 = () => {
  return (
    <div className="product-container">
      <div className="logos">
        <img src={logo1} alt="Logo 1" className="logo-img" />
        <img src={logo2} alt="Logo 2" className="logo-img" />
      </div>

      <div className="cros-img">
        <img src={cros1} alt="Cros 1" />
      </div>

      <div className="small-cros-images">
        <img src={crosSmall1} alt="Cros Small 1" className="small-img" />
        <img src={crosSmall2} alt="Cros Small 2" className="small-img" />
        <img src={crosSmall3} alt="Cros Small 3" className="small-img" />
        <img src={crosSmall4} alt="Cros Small 4" className="small-img" />
        <img src={crosSmall5} alt="Cros Small 5" className="small-img" />
      </div>
      <div className="icon-text-container">
  <div className="icon-row">
    <div className="icon-text">
      <img src={icon1} alt="Icon 1" className="icon-img" />
      <p className="icon-text-paragraph">Signal Catalogue Updates Included</p>
    </div>
    <div className="icon-text">
      <img src={icon4} alt="Icon 2" className="icon-img" />
      <p className="icon-text-paragraph">Free Shipping within USA</p>
    </div>
  </div>

  <div className="icon-row">
    <div className="icon-text">
      <img src={icon2} alt="Icon 3" className="icon-img" />
      <p className="icon-text-paragraph">Signal Catalogue Updates Included</p>
    </div>
    <div className="icon-text">
      <img src={icon3} alt="Icon 4" className="icon-img" />
      <p className="icon-text-paragraph">Customer Support via E-mail, Phone, and Chat</p>
    </div>
  </div>
</div>


<div className="left-section">
  <div className="rectangle">
    <h2 className="rectangle-title">Firebee Headband</h2>
    <img src={stars} alt="Rating Stars" className="rating-stars" />
    <p className="rectangle-text">Order today and receive your Firebee by June 15th, 2021</p>
  </div>

  <div className="second-rectangle">
  <div className="starter-kit-box">
    <div className="starter-text">
        <h1> Firebee Starter Kit </h1>
        <img src={oldprice} alt="" className="oldprice" />

    </div>
    <button className="gradient-button">Most Popular Kit</button>
    <div className="feature-list">
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Access to 7 Signals (and future signal releases)</p>
      </div>
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Firebee Headband</p>
      </div>
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>$19/month membership, first 2 months free</p>
      </div>
    </div>
    
    <div className="paragraph-item">
        <p>The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. Membership can be cancelled anytime. No contracts. Satisfaction guaranteed.</p>

    </div>
  </div>
</div>


<div className="second-rectangle">
  <div className="starter-kit-box">
    <div className="starter-text">
        <h1> Firebee Starter Kit </h1>
        <img src={price} alt="" className="oldprice" />

    </div>
    <div className="feature-list">
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Access to 7 Signals (and future signal releases)</p>
      </div>
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Firebee Headband</p>
      </div>
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>$19/month membership, first 2 months free</p>
      </div>
    </div>
    
    <div className="paragraph-item">
        <p>The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. Membership can be cancelled anytime. No contracts. Satisfaction guaranteed.</p>

    </div>
  </div>
</div>

<div className="button-container">
        <img src={arrow} alt="arrow" className="small-image" />
    </div>

    <div className="logos-container">
      <img src={logos} alt="" className="logos" />

    </div>
 
</div>

 


    </div>
  );
};

export default ProductDisplay1;