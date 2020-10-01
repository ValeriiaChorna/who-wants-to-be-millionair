import React from 'react';
import levelCreator from '../../content/levelCreator';
import './Menu.css';

export default function Menu() {
  const startStep = 500;
  const levelItems = levelCreator(startStep);
  return (
    <ul className="menu">
      {levelItems
        .map(el => (
          <li key={'menuItem' + el} className="menuItem">{`$${el}`}</li>
        ))
        .reverse()}
    </ul>
  );
}
