/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValueOf } from '../../../types/typeHelper';

export type SettingsState = {
  graphUrl: string;
  graphLandscape: string;
  authToken: string;
};

export const settingsInitialState: SettingsState = {
  graphUrl: 'https://sandbox.graph.sap/api/beta',
  graphLandscape: 'Demo',
  authToken:
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIiLCJ6aWQiOiJlMjYzMTNkZi0yNDgzLTRjNWItOTg5Yi03ZWQwOGJmMjk3YzMiLCJhdWQiOiJkZW1vLmFwaS5ncmFwaC5zYXAiLCJleHAiOjQ2ODg2MDkyMjEsImlhdCI6MTYwMzg3ODE0MiwiaXNzIjoiZGVtby5hcGkuZ3JhcGguc2FwIiwic3ViIjoiZGVtb0BncmFwaC5zYXAifQ.1nJljCX2HTUv9swW4a7HgYhxQGfH_DBTRqHrw66Xwv_oPC8bEFo5LpVqXCUrGCuCBLVr-1vrUhBKlfvZD9lg7D3z2Xc70PrmKcUEufa0m6my61QUprYuwMmN89yzsnQSUVwIikm4Po6Xo_cfWOXVDzr0WCjGaG_PAnikHMWFHhHbGpc3X1u-ATFw7Rq0oiulXWfavWBEKKB1zFxQ91dC1T103X4sYk3A2fk-dII8zL2XZ1CeOTi4_ntAYjJ5mm71jN0CwTrUWsLGOGe3aevcIw2QLqH44z96ZRy43LdOr8FzHaATwpd-i9FwQ7HlH8ZDqfHu-6FxBpiI29tT5CfwIQ',
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
      state[key] = value;
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
