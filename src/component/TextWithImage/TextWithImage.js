import React from 'react';
import PropTypes from 'prop-types';
import './TextWithImage.css'; 

const TextWithImage = ({ text1, text2, imageSrc, altText }) => {
  return (
    <div className="text-with-image">
      <img 
        src={imageSrc} 
        alt={altText} 
      />
      <div className="text-container">
        <h1>{text1}</h1>
        <p>{text2}</p>
      </div>
    </div>
  );
};

TextWithImage.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string
};

TextWithImage.defaultProps = {
  altText: ''
};

export default TextWithImage;
