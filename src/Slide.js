/* eslint-disable react/prop-types */
import React from 'react';
import './Slide.css';

function Slide(props) {
  const image = {
    backgroundImage: `url(${props.imgPath})`,
    width: '1000px',
    height: '385px',
    zoom: '0.8',
    margin: 'auto auto auto auto',
  };

  const bgColor = {
    background: `#${props.bgColor}`,
  };

  const textColor = {
    color: `#${props.txtColor}`,
  };

  const textShadow = {
    color: `#${props.txtColor}`,
    textShadow: '0 1px 4px rgba(0,0,0,0.25)',
  };

  return (
    <div className="slideContainer" style={bgColor}>
      <h1 style={props.shadow ? textShadow : textColor}>{props.title}</h1>
      <h2 style={textColor}>{props.description}</h2>
      <button type="button">Add DuckDuckGo to Chrome</button>
      <div className="slideImage" style={image} />
    </div>
  );
}

export default Slide;
