import React from 'react';
import { useSelector } from 'react-redux';
import gameSelectors from '../redux/game/gameSelectors';
import GameStart from '../views/GameStart';
import Game from '../views/Game';
import GameOver from '../views/GameOver';
import './App.css';

const App = () => {
  const gameStatus = useSelector(gameSelectors.getGameStatus);
  return (
    <div className="app">
      {gameStatus === 'inactive' && <GameStart />}
      {gameStatus === 'active' && <Game />}
      {gameStatus === 'restart' && <GameOver />}
    </div>
  );
};

export default App;
