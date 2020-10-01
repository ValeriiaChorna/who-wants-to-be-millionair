import React from 'react';
import PlayZone from '../../components/PlayZone';
import Menu from '../../components/Menu';
import './Game.css';

export default function Game() {
  return (
    <div className="game">
      <PlayZone currentLevel={0} />
      <div className="gameMenuWrapp">
        <Menu currentLevel={3} />
      </div>
    </div>
  );
}
