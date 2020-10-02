import React from 'react';
import { useSelector } from 'react-redux';
import levels from '../../content/gameLevels.json';
import { ReactComponent as MenuBorderIcons } from '../../assets/img/borderIcon.svg';
import './Menu.css';
import gameSelectors from '../../redux/game/gameSelectors';

export default function Menu() {
  const { level } = useSelector(gameSelectors.getUserLevel);

  return (
    <ul className="menu">
      {levels
        .map((el, i) => (
          <li key={'menuItem' + el} className="menuItem">
            <p className={`menuText ${addStyle(level, i)}`}>{`$${el}`}</p>
            {<MenuBorderIcons className={`menuIcons ${addStyle(level, i)}`} />}
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
