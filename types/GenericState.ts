import { GenericSliceState } from "./GenericSliceState";

export type GenericState = {
  [x: string]: GenericSliceState<any>;
};
