const getGameStatus = state => state.game.gameStatus;
const getUserCoins = state => state.game.gameUserScore.userCoins;
const getUserLevel = state => state.game.gameUserScore.userLevel;

export default {
  getGameStatus,
  getUserCoins,
  getUserLevel,
};
