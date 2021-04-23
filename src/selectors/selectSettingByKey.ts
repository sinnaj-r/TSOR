import { createSelector } from 'reselect';
import { SettingsState } from '../features/settings';
import { RootState } from '../store';

export const selectSettingByKey = (key: keyof SettingsState) =>
  createSelector(
    (state: RootState) => state.settings,
    (settings) => settings[key],
  );
