import React from 'react';
import Title from './title/index';
import Robot from './Robot';
import DataInfo from './DataInfo';
import DiscButton from './button-dist/index';
import './cuadro.css';

function Cuadro() {
  return (
    <div className="cuadro">
      <div className="imagen">
        <Robot />
        <Title />
        <DataInfo />
        <DiscButton />
      </div>
    </div>
  );
}

export default Cuadro;
