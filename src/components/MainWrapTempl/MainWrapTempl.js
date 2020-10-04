import React from 'react';
import { useDispatch } from 'react-redux';
import gameOperations from '../../redux/game/gameOperations.js';
import { ReactComponent as HandImg } from '../../assets/img/hand-1.svg';
import './MainWrapTempl.css';

export default function MainWrapTempl({ buttonText, children }) {
  const dispatch = useDispatch();
  const onGame = () => dispatch(gameOperations.onGame());

  const onClick = async () => {
    await setTimeout(() => onGame(), 400);
  };

  return (
    <div className="mainWrapTempl">
      <HandImg className="handImg" />
      <div className="titleWrapper">
        {children}
        <button type="button" className="mainButton" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
