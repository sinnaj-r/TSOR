/* eslint-disable no-param-reassign */
import {
  createSelector,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Function } from 'ts-toolbelt';
import op from 'object-path';
import { ValueOf } from '../types/Helper';
import { SettingsState } from '../types/SettingsState';

export const settingsInitialState: SettingsState = {
  url: `https://example.com`,
  headers: {},
};

// TODO Create TSOR Settings Class
export const selectSettingByKey = <S extends SettingsState>(
  key: keyof SettingsState,
) =>
  createSelector(
    (state: { settings: S }) => state.settings,
    (settings) => settings[key],
  );
export const createSettingsSlice = <S extends SettingsState>(initialState: S) =>
  createSlice({
    name: 'settings',
    initialState: { ...settingsInitialState, ...initialState } as S,
    reducers: {
      set<Path extends string>(
        state: Draft<S>,
        action: PayloadAction<{
          path: Function.AutoPath<S, Path>;
          value: ValueOf<typeof state>;
        }>,
      ) {
        const { path, value } = action.payload;
        op.set(state, path, value);
      },
      setMultiple(state, action: PayloadAction<Partial<typeof state>>) {
        const keys = Object.keys(action.payload) as (keyof typeof state)[];
        for (const key of keys) {
          state[key] = action.payload[key]!;
        }
      },
    },
  });
