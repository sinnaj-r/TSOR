import {
  AnyAction,
  CaseReducerActions,
  EntitySelectors,
  Reducer,
} from '@reduxjs/toolkit';
import { IDObject } from '../types/IDObject';
import { AsyncActionsType } from './redux/createAsyncThunksForAPI';
import { GenericSliceState } from '../types/GenericSliceState';
import { GenericReducers } from '../types/GenericReducers';
import { CompositionMapType } from './redux/compositions';
import { createApiSlice } from './redux/createApiSlice';

export type TAsyncActions<T extends IDObject> = AsyncActionsType<T, any>;

export type TBaseActions<T extends IDObject> = CaseReducerActions<
  GenericReducers<T>
>;

export type TActions<T extends IDObject> = TAsyncActions<T> & TBaseActions<T>;

export class TSOR_SLICE<
  K extends string,
  T extends IDObject,
  S extends Record<string, any>
> {
  private actions: TAsyncActions<T>;

  private baseActions: TBaseActions<T>;

  selectors: EntitySelectors<T, S>;

  reducer: Reducer<GenericSliceState<T>, AnyAction>;

  routeKey: K;

  constructor(
    constructable: T,
    compositionMap: CompositionMapType = { compositions: {}, apiNames: {} },
  ) {
    // eslint-disable-next-line no-underscore-dangle
    const routeName = constructable._entityName as K;
    const { adapter, actions, slice } = createApiSlice<K, T, S>(
      constructable,
      undefined,
      compositionMap,
    );
    this.reducer = slice.reducer;
    this.actions = actions;
    this.baseActions = slice.actions;
    this.selectors = adapter.getSelectors((state) => state[routeName]);
    this.routeKey = routeName;
  }

  getActions(): TActions<T> {
    return { ...this.actions, ...this.baseActions };
  }
}
