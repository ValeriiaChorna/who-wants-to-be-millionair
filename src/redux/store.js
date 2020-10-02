import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// routes

import gameReducer from './game/gameReducer';

const gamePersistConfig = {
  key: 'game',
  storage,
  whitelist: ['gameUserScore'],
};

export const store = configureStore({
  reducer: {
    // game: gameReducer,
    game: persistReducer(gamePersistConfig, gameReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
