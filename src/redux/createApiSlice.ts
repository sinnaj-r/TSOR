/* eslint-disable no-param-reassign */
import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

import { createAsyncThunksForAPI } from './createAsyncThunksForAPI';
import { GenericSliceState } from '../../types/GenericSliceState';
import { GenericReducers } from '../../types/GenericReducers';
import { CompositionMapType } from './compositions';
import { createExtraReducers } from './createExtraReducers';
import { QueryOptions } from '../JSONQuery/createRequest';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-common';

const createAdapter = <T>() => createEntityAdapter<T>({});
/**
 * The main HO-Function for creating an Redux-Toolkit Slice for an generic API-Route e.g. product or BuPa
 *
 * @template T
 * @param {string} apiName
 * @returns
 */
export const createApiSlice = <
  K extends string,
  T extends Entity,
  S extends Record<string, any>
>(
  apiName: K,
  adapter = createAdapter<T>(),
  apiPrefix: string = apiName,
  compositionMap: CompositionMapType = { compositions: {}, apiNames: {} },
) => {
  const actions = createAsyncThunksForAPI<T, S>(
    apiName,
    apiPrefix,
    compositionMap,
  );
  const slice = createSlice({
    name: apiName,
    initialState: {
      ...adapter.getInitialState({
        loading: 'idle',
      }),
      filter: {},
    } as GenericSliceState<T>,
    reducers: {
      setFilter(state, action: PayloadAction<GenericSliceState<T>['filter']>) {
        // eslint-disable-next-line no-param-reassign
        // eslint-disable-next-line no-undef
        (state.filter as Partial<QueryOptions<T>>) = action.payload;
      },
      dismissError(state) {
        state.error = undefined;
        state.loading = 'idle';
      },
      clear(state) {
        state.error = undefined;
        state.loading = 'idle';
        state.filter = {};
        adapter.removeAll(state as GenericSliceState<T>);
      },
      setAll(state, action: PayloadAction<T[]>) {
        adapter.setAll(state as EntityState<T>, action.payload);
      },
      upsertMany(state, action: PayloadAction<T[]>) {
        adapter.upsertMany(state as EntityState<T>, action.payload);
      },
    } as GenericReducers<T>,
    extraReducers: (builder) =>
      createExtraReducers<K, T, S>(apiName, actions, adapter, builder),
  });
  return { actions, slice, adapter };
};
