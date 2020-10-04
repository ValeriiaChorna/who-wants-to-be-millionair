import React, { useState } from 'react';
import PlayZone from '../../components/PlayZone';
import Menu from '../../components/Menu';
import { ReactComponent as GambMenuIcon } from '../../assets/img/gambur-menu.svg';
import { ReactComponent as CloseButton } from '../../assets/img/close-butt.svg';
import './Game.css';

export default function Game() {
  const [mobeleMenuShow, setMobeleMenuShow] = useState(false);

  const onShowMenu = () => {
    setMobeleMenuShow(!mobeleMenuShow);
  };

  return (
    <div className="game">
      <nav className="mobileMenu">
        {!mobeleMenuShow && (
          <div className="bamburgIcon">
            <button
              type="button"
              className="menuButton openMenuButton"
              type="submit"
              onClick={onShowMenu}
            >
              <GambMenuIcon />
            </button>
          </div>
        )}
        {mobeleMenuShow && (
          <div className="crossIcon">
            <button
              type="button"
              className="menuButton closeMenuButton"
              type="submit"
              onClick={onShowMenu}
            >
              <CloseButton />
            </button>
          </div>
        )}
      </nav>
      <PlayZone />
      <div className={`gameMenuWrapp ${mobeleMenuShow && 'showMenu'}`}>
        <Menu />
      </div>
    </div>
  );
}
