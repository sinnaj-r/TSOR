/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
      set(
        state,
        action: PayloadAction<{
          key: keyof typeof state;
          value: ValueOf<typeof state>;
        }>,
      ) {
        const { key, value } = action.payload;
        state[key] = value;
      },
      setMultiple(state, action: PayloadAction<Partial<typeof state>>) {
        const keys = Object.keys(action.payload) as (keyof typeof state)[];
        for (const key of keys) {
          state[key] = action.payload[key]!;
        }
      },
    },
  });
