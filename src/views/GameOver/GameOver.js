import React from 'react';
import MainWrapTempl from '../../components/MainWrapTempl';
import './GameOver.css';

export default function GameOver({ coinsValue = 0 }) {
  return (
    <div className="gameOver">
      <MainWrapTempl buttonText={'Try again'}>
        <h3 className="secondaryTitle">Total score</h3>
        <h2 className="mainTitle">{`$${coinsValue} earned`}</h2>
      </MainWrapTempl>
    </div>
  );
}
