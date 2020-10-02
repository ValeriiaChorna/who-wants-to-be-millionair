import { createAction } from '@reduxjs/toolkit';

const gameStatusInactive = createAction('game/StatusInactive');
const gameStatusActive = createAction('game/StatusActive');
const gameStatusRestart = createAction('game/StatusRestart');

const gameUserCoins = createAction('game/UserCoins');
const gameUserLevel = createAction('game/UserLevel');

export default {
  gameStatusActive,
  gameStatusInactive,
  gameStatusRestart,

  gameUserCoins,
  gameUserLevel,
};
