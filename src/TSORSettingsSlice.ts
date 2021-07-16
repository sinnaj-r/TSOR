/* eslint-disable no-underscore-dangle */
import {
  CaseReducer,
  CaseReducerActions,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Reducer, AnyAction } from 'redux';
import { createSettingsSlice, selectSettingByPath } from './redux/settings';
import { ValueOf } from './types/Helper';

import { IDObject } from './types/IDObject';
import { SettingsState } from './types/SettingsState';
import { ITSORSlice } from './types/TSOR-Types';

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

export class TSORSettingsSlice<T extends IDObject, S, G extends SettingsState>
  implements ITSORSlice<T, S, G>
{
  _actions: SettingsActionType<G>;

  _baseActions: {};

  _selectors: { selectSettingByPath: typeof selectSettingByPath };

  _reducer: Reducer<G, AnyAction>;

  routeName: string;

  constructor(initalState: G) {
    // eslint-disable-next-line no-underscore-dangle

    const routeName = 'settings';
    const slice = createSettingsSlice(initalState);
    this._reducer = slice.reducer;
    this._actions = slice.actions;
    this._baseActions = {};
    this._selectors = {
      selectSettingByPath,
    };
    this.routeName = routeName;
  }

  getActions() {
    return this._actions;
  }

  getReducer() {
    return this._reducer;
  }

  getSelectors() {
    return this._selectors;
  }
}
