/* eslint-disable no-param-reassign */
import {
  createSelector,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Function, Object as TSObject, String } from 'ts-toolbelt';
import op from 'object-path';
import { ValueOf } from '../types/Helper';
import { SettingsState } from '../types/SettingsState';

export const settingsInitialState: SettingsState = {
  url: `https://example.com`,
  headers: {},
};

// TODO Use Path Types for select Settings By Key
export const createSelectSettingByPath =
  <S extends SettingsState>() =>
  <Path extends string>(path: Function.AutoPath<S, Path>) =>
    createSelector(
      (state: { settings: S }) => state.settings,
      (settings): TSObject.Path<S, String.Split<Path, '.'>> =>
        op.get(settings, path),
    );
/**
 * Creates a Settings Slice
 *
 * @template S The Type of SettingsState
 * @param {S} initialState The initial State
 */
export const createSettingsSlice = <S extends SettingsState>(initialState: S) =>
  createSlice({
    name: 'settings',
    initialState: { ...settingsInitialState, ...initialState } as S,
    reducers: {
      set<Path extends string>(
        state: Draft<S>,
        action: PayloadAction<{
          // TODO Use Autopath
          path: Path; // Function.AutoPath<S, Path>;
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
