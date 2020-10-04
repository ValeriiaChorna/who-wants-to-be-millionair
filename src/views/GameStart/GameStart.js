import React from 'react';
import MainWrapTempl from '../../components/MainWrapTempl';
import { ReactComponent as TriangIcon } from '../../assets/img/Rectangle-15.svg';
import './GameStart.css';

export default function GameStart() {
  return (
    <div className="gameStart">
      <TriangIcon className="triangIcon" />
      <MainWrapTempl buttonText={'Start'}>
        <h2 className="mainTitle">Who wants to be a millionaire?</h2>
      </MainWrapTempl>
    </div>
  );
}
