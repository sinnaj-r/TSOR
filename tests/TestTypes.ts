import { AnyAction } from 'redux';
import { TSOR_SLICE } from '../src/TSOR_SLICE';
import { TSOR_STORE } from '../src/TSOR_STORE';
import { GenericSliceState } from '../types/GenericSliceState';
import { SettingsState } from '../types/SettingsState';

export type ExampleItem1Type = {
  id: string;
  description: string;
  num1: number;
  num2: number;
  body?: {
    items?: ExampleItem2Type[];
  };
};

export type ExampleItem2Type = {
  id: string;
  description: number;
  num1: number;
  num2: number;
  extraField: string;
  ref?: ExampleItem1Type;
};

export type STATE_TYPE = {
  exampleItem1: GenericSliceState<ExampleItem1Type>;
  exampleItem2: GenericSliceState<ExampleItem2Type>;
  settings: SettingsState;
};
export type STORE_TYPE = TSOR_STORE<STATE_TYPE, AnyAction>;
export type SLICE1_TYPE = TSOR_SLICE<
  'exampleItem1',
  ExampleItem1Type,
  STATE_TYPE
>;
export type SLICE2_TYPE = TSOR_SLICE<
  'exampleItem2',
  ExampleItem2Type,
  STATE_TYPE
>;
