import React, { useState } from 'react';
import PlayZone from '../../components/PlayZone';
import Menu from '../../components/Menu';
import './Game.css';

export default function Game() {
  const [mobeleMenuShow, setMobeleMenuShow] = useState(false);

  const onShowMenu = () => {
    setMobeleMenuShow(!mobeleMenuShow);
  };

  return (
    <div className="game">
      <nav class="mobileMenu">
        {!mobeleMenuShow && (
          <div className="bamburgIcon">
            <button
              type="button"
              className="openMenu"
              type="submit"
              onClick={onShowMenu}
            >
              Open
            </button>
          </div>
        )}
        {mobeleMenuShow && (
          <div className="crossIcon">
            <button
              type="button"
              className="closeMenu"
              type="submit"
              onClick={onShowMenu}
            >
              close
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
