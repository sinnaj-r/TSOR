import {
  Action,
  configureStore,
  getDefaultMiddleware,
  Reducer,
  Store,
  ThunkDispatch,
} from '@reduxjs/toolkit';
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
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Persistor } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export class TSOR_STORE<S, A extends Action<any>> {
  persistor: Persistor;

  reducer: Reducer<S & PersistPartial, A>;

  store: Store<ReturnType<Reducer<S & PersistPartial, A>>>;

  dispatch: ThunkDispatch<S, void, A>;

  constructor(reducer: Reducer<S, A>) {
    const resettableRootReducer = (state: any, action: any) => {
      if (action.type === 'store/reset') {
        storage.removeItem('persist:root');
        return reducer(undefined, action);
      }
      return reducer(state, action);
    };

    this.reducer = persistReducer(persistConfig, resettableRootReducer);

    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    this.store = configureStore({
      reducer: this.reducer,
      middleware,
    });
    this.persistor = persistStore(this.store);
    this.dispatch = this.store.dispatch as ThunkDispatch<S, void, A>;
  }

  getState(): S & PersistPartial {
    return this.store.getState();
  }
}

export const resetStoreAction = () => ({ type: 'store/reset' });
