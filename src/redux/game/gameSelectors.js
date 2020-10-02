const getGameStatus = state => state.game.gameStatus;
const getUserCoins = state => state.game.userCoins;
const getUserLevel = state => state.game.userLevel;

export default {
  getGameStatus,
  getUserCoins,
  getUserLevel,
};
