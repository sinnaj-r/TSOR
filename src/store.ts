import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const resettableRootReducer = (state: any, action: any) => {
  if (action.type === 'store/reset') {
    storage.removeItem('persist:root');
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, resettableRootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export const resetStoreAction = () => ({ type: 'store/reset' });
export const persistor = persistStore(store);
