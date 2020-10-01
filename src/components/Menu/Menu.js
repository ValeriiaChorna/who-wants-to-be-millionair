import React from 'react';
import levelCreator from '../../content/levelCreator';
import { ReactComponent as MenuBorderIcons } from '../../assets/img/borderIcon.svg';
import './Menu.css';

export default function Menu({ currentLevel }) {
  const startStep = 500;
  const levelItems = levelCreator(startStep);
  return (
    <ul className="menu">
      {levelItems
        .map((el, i) => (
          <li key={'menuItem' + el} className="menuItem">
            <p
              className={`menuText ${addStyle(currentLevel, i)}`}
            >{`$${el}`}</p>
            {
              <MenuBorderIcons
                className={`menuIcons ${addStyle(currentLevel, i)}`}
              />
            }
          </li>
        ))
        .reverse()}
    </ul>
  );
}

function addStyle(currentLevel, currentIndex) {
  if (currentIndex === currentLevel) return 'currentLevel';
  if (currentIndex < currentLevel) return 'passedLevel';
}
