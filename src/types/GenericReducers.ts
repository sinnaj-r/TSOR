import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { QueryOptions } from 'cloud-sdk-json-query';
import { GenericSliceState } from './GenericSliceState';
import { IDObject } from './IDObject';

export type GenericReducers<T extends IDObject> = {
  setFilter: CaseReducer<GenericSliceState<T>, PayloadAction<QueryOptions<T>>>;
  dismissError: CaseReducer<GenericSliceState<T>, PayloadAction<void>>;
  clear: CaseReducer<GenericSliceState<T>, PayloadAction<void>>;
  setAll: CaseReducer<GenericSliceState<T>, PayloadAction<T[]>>;
  upsertMany: CaseReducer<GenericSliceState<T>, PayloadAction<T[]>>;
};
