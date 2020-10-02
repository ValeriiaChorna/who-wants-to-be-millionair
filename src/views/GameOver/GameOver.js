import React from 'react';
import { useSelector } from 'react-redux';
import gameSelectors from '../../redux/game/gameSelectors';
import MainWrapTempl from '../../components/MainWrapTempl';
import './GameOver.css';

export default function GameOver() {
  const wonAmountCoins = useSelector(gameSelectors.getUserCoins);
  return (
    <div className="gameOver">
      <MainWrapTempl buttonText={'Try again'}>
        <h3 className="secondaryTitle">Total score</h3>
        <h2 className="mainTitle">{`$${wonAmountCoins} earned`}</h2>
      </MainWrapTempl>
    </div>
  );
}
