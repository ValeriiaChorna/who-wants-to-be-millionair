import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Spinner from './Spinner';
import GameStart from '../views/GameStart';
import Game from '../views/Game';
import GameOver from '../views/GameOver';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={GameStart}></Route>
          <Route path="/game" component={Game}></Route>
          <Route path="/game-over" component={GameOver}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
