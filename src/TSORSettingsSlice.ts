/* eslint-disable no-underscore-dangle */

import { Reducer, AnyAction } from 'redux';

import {
  createSelectSettingByPath,
  createSettingsSlice,
} from './redux/createSettingsSlice';

import { IDObject } from './types/IDObject';
import { SettingsState } from './types/SettingsState';
import { ITSORSlice, SettingsActionType } from './types/TSOR-Types';
/**
 * This Slice is used to store request settings
 *
 * @export
 * @class TSORSettingsSlice
 * @implements {ITSORSlice<T, S, G>}
 * @template T The SDK Entity Type
 * @template S The Type of the full State
 * @template G The Type of the slice State
 */
export class TSORSettingsSlice<T extends IDObject, S, G extends SettingsState>
  implements ITSORSlice<T, S, G>
{
  _actions: SettingsActionType<G>;

  _baseActions: {};

  _selectors = {
    selectSettingByPath: createSelectSettingByPath<G>(),
  };

  _reducer: Reducer<G, AnyAction>;

  routeName: string;

  constructor(initalState: G) {
    const routeName = 'settings';
    const slice = createSettingsSlice(initalState);
    this._reducer = slice.reducer;
    this._actions = slice.actions;
    this._baseActions = {};
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
