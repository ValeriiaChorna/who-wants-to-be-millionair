import React from 'react';
import { NavLink } from 'react-router-dom';
import GameOver from '../GameOver';
import Game from '../Game';

export default function GameStart() {
  return (
    <div>
      <p>Game Start: Who wants to be a millionaire?</p>
      <ul>
        <li>
          <NavLink
            to="/game-over"
            // className={styles.mainMenuItem}
            // activeClassName={styles.mainMenuActiveItem}
          >
            <GameOver />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            // className={styles.mainMenuItem}
            // activeClassName={styles.mainMenuActiveItem}
          >
            <Game />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
