import React from 'react';
import './App.css';

function Background(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="background">{children}</div>
  );
}

export default Background;
