import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import gameActions from './gameActions';

const gameStatusReducer = createReducer('inactive', {
  [gameActions.gameStatusActive]: (state, { payload }) => payload,
  [gameActions.gameStatusInactive]: (state, { payload }) => payload,
  [gameActions.gameStatusRestart]: (state, { payload }) => payload,
});

const UserCoinsReducer = createReducer(0, {
  [gameActions.gameUserCoins]: (state, { payload }) => payload,
});

const UserLevelReducer = createReducer(
  {},
  {
    [gameActions.gameUserLevel]: (state, { payload }) => payload,
  },
);

const gameUserScore = combineReducers({
  userCoins: UserCoinsReducer,
  userLevel: UserLevelReducer,
});

export default combineReducers({
  gameStatus: gameStatusReducer,
  gameUserScore,
});
