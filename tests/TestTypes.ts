import { AnyAction } from 'redux';
import { TSORSlice } from '../src/TSORSlice';
import { TSORSettingsSlice } from '../src/TSORSettingsSlice';
import { TSORStore } from '../src/TSORStore';
import { GenericSliceState } from '../types/GenericSliceState';
import { SettingsState } from '../types/SettingsState';
import { ExampleItem1 } from './mocks/ExampleItem1/ExampleItem1';
import { ExampleItem2 } from './mocks/ExampleItem2/ExampleItem2';

export type STATE_TYPE = {
  ExampleItem1: GenericSliceState<ExampleItem1>;
  ExampleItem2: GenericSliceState<ExampleItem2>;
  settings: SettingsState;
};
export type STORE_TYPE = TSORStore<STATE_TYPE, AnyAction>;
export type SLICE1_TYPE = TSORSlice<ExampleItem1, STATE_TYPE>;
export type SLICE2_TYPE = TSORSlice<ExampleItem2, STATE_TYPE>;
export type SETTINGSSLICE_TYPE = TSORSettingsSlice<
  any,
  STATE_TYPE,
  SettingsState
>;
