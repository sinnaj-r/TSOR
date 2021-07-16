import {
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Reducer,
  ReducersMapObject,
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
import { SliceMapObject } from './types/TSOR-Types';

const persistConfig = {
  key: 'root',
  storage,
};

const sliceMapToReducer = <
  S extends Record<string, any>,
  A extends Action<any>,
>(
  slices: SliceMapObject<S, A>,
): ReducersMapObject<S, A> => {
  const sliceEntries = Object.keys(slices) as (keyof S)[];

  // TODO Fix Type
  const reducerMap = Object.fromEntries(
    sliceEntries.map((k) => [k, slices[k].getReducer()]),
  ) as unknown as ReducersMapObject<S, A>;
  return reducerMap;
};

export class TSORStore<S extends Record<string, any>, A extends Action<any>> {
  persistor: Persistor;

  private reducer: Reducer<S & PersistPartial, A>;

  store: Store<ReturnType<Reducer<S & PersistPartial, A>>>;

  dispatch: ThunkDispatch<S, void, A>;

  constructor(slices: SliceMapObject<S, A>) {
    const reducer = combineReducers(sliceMapToReducer<S, A>(slices));

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
