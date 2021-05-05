import {
  CaseReducer,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Draft } from "immer";
import { QueryOptions } from "odata-query";
import { GenericSliceState } from "./GenericSliceState";
import { IDObject } from "./IDObject";

export type GenericReducers<T extends IDObject> = {
  setFilter: CaseReducer<
    GenericSliceState<T>,
    PayloadAction<Partial<QueryOptions<T>>>
  >;
  dismissError: CaseReducer<GenericSliceState<T>, PayloadAction<void>>;
  clear: CaseReducer<GenericSliceState<T>, PayloadAction<void>>;
  setAll: CaseReducer<GenericSliceState<T>, PayloadAction<T[]>>;
};
