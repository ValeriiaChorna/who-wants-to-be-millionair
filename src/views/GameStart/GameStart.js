import React from 'react';
import MainWrapTempl from '../../components/MainWrapTempl';
import './GameStart.css';

export default function GameStart() {
  return (
    <div className="gameStart">
      <MainWrapTempl buttonText={'Start'}>
        <h2 className="mainTitle">Who wants to be a millionaire?</h2>
      </MainWrapTempl>
    </div>
  );
}
