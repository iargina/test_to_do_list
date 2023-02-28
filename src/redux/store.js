import { configureStore } from '@reduxjs/toolkit';
import { toDoReducer } from './todoSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const toDoPersistConfig = {
  key: 'ToDo',
  storage: storage,
};

const toDoPersistReducer = persistReducer(toDoPersistConfig, toDoReducer);

export const store = configureStore({
  reducer: {
    toDo: toDoPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
