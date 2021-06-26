import { AnyAction } from 'redux';
import { TSOR_SLICE } from '../src/TSOR_SLICE';
import { TSOR_SETTINGSLICE } from '../src/TSOR_SETTINGSLICE';
import { TSOR_STORE } from '../src/TSOR_STORE';
import { GenericSliceState } from '../types/GenericSliceState';
import { SettingsState } from '../types/SettingsState';
import { ExampleItem1 } from './mocks/ExampleItem1/ExampleItem1';
import { ExampleItem2 } from './mocks/ExampleItem2/ExampleItem2';

export type STATE_TYPE = {
  ExampleItem1: GenericSliceState<ExampleItem1>;
  ExampleItem2: GenericSliceState<ExampleItem2>;
  settings: SettingsState;
};
export type STORE_TYPE = TSOR_STORE<STATE_TYPE, AnyAction>;
export type SLICE1_TYPE = TSOR_SLICE<ExampleItem1, STATE_TYPE>;
export type SLICE2_TYPE = TSOR_SLICE<ExampleItem2, STATE_TYPE>;
export type SETTINGSSLICE_TYPE = TSOR_SETTINGSLICE<
  any,
  STATE_TYPE,
  SettingsState
>;
