
import React from 'react';
import './Question.css';
import check from '../../assets/check.png';
import img from '../../assets/ms.png'

const Question = () => {
    return (
        <div className="question-container">
            <div className="question-title"> What will Firebee do for me?</div>
            <div className="question-paragrap"> Firebee will help you gently nudge yourself into a different mental state</div>

            <div className="content">
                <img src= {img} alt="" className="image" />
                
                <div className="feature-list">
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Can’t sleep? Turn on the deep sleep signal </p>
      </div>
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Feeling tired? Turn on the alert signal </p>
      </div>
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Feeling anxious? Turn on the calm signal</p>
      </div>
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Feeling unproductive? Turn on the focus signal </p>
      </div> 
      <div className="feature-item">
        <img src={check} alt="Check Icon" className="check-icon" />
        <p>Feeling blue? Turn on the happy signal </p>
      </div> 
    </div>
            </div>
        </div>
    );
};

export default Question;
