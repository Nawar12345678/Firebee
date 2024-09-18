import React from 'react';
import './FirebeeSignalGrid.css';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png'








const FirebeeSignalGrid = () => {
  const signals = [
    {
        imageSrc: img1,
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
        imageSrc: img2,
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking and personalized insights.',
    },
    {
        imageSrc: img3,
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking and personalized insights.',
    },
    {
        imageSrc: img4,
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking and personalized insights.',
    },
    {
        imageSrc: img5,
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking and personalized insights.',
    },
    {
        imageSrc: img6,
        title: 'Happy',
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking and personalized insights.',
    },
    {
        imageSrc: img7,
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking and personalized insights.',
    },
    {
        imageSrc: img8,
      description: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking and personalized insights.',
    },
   
  ];

  return (
    <div className="container">
      <div className="title">Firebee Signals</div>


      <div className="grid">
        {signals.map((signal, index) => (
          <div key={index} className="grid-item">
            <img src={signal.imageSrc} alt='' />
            <p>{signal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirebeeSignalGrid;
