import React from 'react';
import './App.css';
import GameStart from '../views/GameStart';
import Game from '../views/Game';
import GameOver from '../views/GameOver';

function App() {
  return (
    <div className="app">
      <GameStart />
      <Game />
      <GameOver />
    </div>
  );
}

export default App;
