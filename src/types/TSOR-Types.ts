import { CaseReducerActions, EntitySelectors } from '@reduxjs/toolkit';
import { Action, ActionCreator, AnyAction, Reducer } from 'redux';
import { AsyncActionsType } from '../redux/createAsyncThunksForAPI';
import { GenericReducers } from './GenericReducers';
import { IDObject } from './IDObject';

export type SliceMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: I_TSOR_SLICE<any, S, S[K]>;
};
export interface Selectors<G> {
  [key: string]: (state: G, ...args: any[]) => any;
}
export type Actions<A> = Record<string, ActionCreator<A>>;

export interface I_TSOR_SLICE<
  T extends IDObject,
  S extends Record<string, any>,
  G,
> {
  _actions: Actions<any>;

  _baseActions: Actions<any>;

  _selectors: EntitySelectors<T, S> | {};

  _reducer: Reducer<G, AnyAction>;

  routeKey: string;
  getActions(): Record<string, ActionCreator<any>>;
  getReducer(): I_TSOR_SLICE<T, S, G>['_reducer'];
  getSelectors(): I_TSOR_SLICE<T, S, G>['_selectors'];
}

export type TAsyncActions<T extends IDObject> = AsyncActionsType<T, any>;

export type TBaseActions<T extends IDObject> = CaseReducerActions<
  GenericReducers<T>
>;

export type TActions<T extends IDObject> = TAsyncActions<T> & TBaseActions<T>;
