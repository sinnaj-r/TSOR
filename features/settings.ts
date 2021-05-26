/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValueOf } from '../../../types/typeHelper';

export type SettingsState = {
  graphUrl: string;
  graphLandscape: string;
  authToken: string;
  currentCustomer?: string;
  hideOtherActivities: boolean;
  currentColorTheme: string;
};

export const settingsInitialState: SettingsState = {
  graphUrl: `https://sapgraph-configurable-graphlet-with-reverse-proxy.cfapps.eu10.hana.ondemand.com`, // 'https://sandbox.graph.sap/api/beta',
  graphLandscape: 'Demo',
  authToken: '',
  currentCustomer: undefined,
  hideOtherActivities: true,
  currentColorTheme: 'blue',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsInitialState,
  reducers: {
    set(
      state,
      action: PayloadAction<{
        key: keyof SettingsState;
        value: ValueOf<SettingsState>;
      }>,
    ) {
      const { key, value } = action.payload;
      (state[key] as any) = value!;
    },
    setMultiple(state, action: PayloadAction<Partial<SettingsState>>) {
      for (const key of Object.keys(
        action.payload,
      ) as (keyof SettingsState)[]) {
        // @ts-ignore
        state[key] = action.payload[key];
      }
    },
  },
});

export const { set, setMultiple } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
