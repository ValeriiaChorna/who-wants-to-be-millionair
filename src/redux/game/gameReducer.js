import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import gameActions from './gameActions';
import levels from '../../content/gameLevels.json';

const gameStatusReducer = createReducer('inactive', {
  [gameActions.gameStatusActive]: (state, { payload }) => payload,
  [gameActions.gameStatusInactive]: (state, { payload }) => payload,
  [gameActions.gameStatusRestart]: (state, { payload }) => payload,
});

const UserCoinsReducer = createReducer(0, {
  [gameActions.gameUserCoins]: (state, { payload }) => payload,
});

const UserLevelReducer = createReducer(
  {
    level: 0,
    amount: levels[0],
  },
  {
    [gameActions.gameUserLevel]: (state, { payload }) => payload,
  },
);

export default combineReducers({
  gameStatus: gameStatusReducer,
  userCoins: UserCoinsReducer,
  userLevel: UserLevelReducer,
});
