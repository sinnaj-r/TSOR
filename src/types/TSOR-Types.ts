import {
  CaseReducer,
  CaseReducerActions,
  Draft,
  EntitySelectors,
  OutputSelector,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { Action, ActionCreator, AnyAction, Reducer } from 'redux';
import { AsyncActionsType } from '../redux/createAsyncThunksForAPI';
import { GenericReducers } from './GenericReducers';
import { GenericSliceState } from './GenericSliceState';
import { ValueOf } from './Helper';
import { IDObject } from './IDObject';
import { SettingsState } from './SettingsState';

// eslint-disable-next-line unused-imports/no-unused-vars
export type SliceMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: ITSORSlice<any, S, S[K]>;
};
export interface Selectors<G> {
  [key: string]: (state: G, ...args: any[]) => any;
}
export type Actions<A> = Record<string, ActionCreator<A>>;

export interface I_TSOR_SELECTORS<
  T extends IDObject,
  S extends Record<string, any>,
> {
  selectIsPending: (state: S) => boolean;
  selectIsRejected: (state: S) => boolean;
  selectIsIdling: (state: S) => boolean;
  selectLoadingStatus: (state: S) => GenericSliceState<T>['loading'];
  selectError: (state: S) => SerializedError | undefined;
  selectFilter: (state: S) => GenericSliceState<T>['filter'];
}

export interface ITSORSlice<
  T extends IDObject,
  S extends Record<string, any>,
  G,
> {
  _actions: Actions<any>;

  _baseActions: Actions<any>;

  _selectors:
    | EntitySelectors<T, S>
    | {
        selectSettingByPath: (
          path: any,
        ) => OutputSelector<{ settings: G }, any, (res: G) => any>;
      };

  _reducer: Reducer<G, AnyAction>;

  routeName: string;
  getActions(): Record<string, ActionCreator<any>>;
  getReducer(): ITSORSlice<T, S, G>['_reducer'];
  getSelectors():
    | (ITSORSlice<T, S, G>['_selectors'] & I_TSOR_SELECTORS<T, S>)
    | ITSORSlice<T, S, G>['_selectors'];
}

export type TAsyncActions<T extends IDObject> = AsyncActionsType<T, any>;

export type TBaseActions<T extends IDObject> = CaseReducerActions<
  GenericReducers<T>
>;

export type TActions<T extends IDObject> = TAsyncActions<T> & TBaseActions<T>;

export type SettingsReducerType<G extends SettingsState> = {
  set: CaseReducer<
    Draft<G>,
    PayloadAction<{
      path: string;
      value: ValueOf<Draft<G>>;
    }>
  >;
  setMultiple: CaseReducer<G, PayloadAction<Partial<Draft<G>>>>;
};

export type SettingsActionType<G extends SettingsState> = CaseReducerActions<
  SettingsReducerType<G>
>;
