import {
  AnyAction,
  CaseReducerActions,
  EntitySelectors,
  Reducer,
} from '@reduxjs/toolkit';
import { createApiSlice } from './redux/HOOdataReducer';
import { IDObject } from '../types/IDObject';
import { AsyncActionsType } from './redux/HOAsyncThunks';
import { GenericSliceState } from '../types/GenericSliceState';
import { GenericReducers } from '../types/GenericReducers';
import { CompositionMapType } from './redux/compositions';

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
    routeName: K,
    routeSuffix: string = routeName,
    compositionMap: CompositionMapType = { compositions: {}, apiNames: {} },
  ) {
    const { adapter, actions, slice } = createApiSlice<K, T, S>(
      routeName,
      undefined,
      routeSuffix,
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
