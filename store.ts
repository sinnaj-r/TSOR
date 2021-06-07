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

const TEST_ENV =
  // @ts-ignore
  process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'test-build';

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

let middlewareOptions: Parameters<typeof getDefaultMiddleware>[0] = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

if (TEST_ENV) {
  middlewareOptions = {
    immutableCheck: false,
    serializableCheck: false,
  };
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware(middlewareOptions),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export const resetStoreAction = () => ({ type: 'store/reset' });
export const persistor = persistStore(store);

// @ts-ignore
if (TEST_ENV) {
  (window as any).store = store;
}
