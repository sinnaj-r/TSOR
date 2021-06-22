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

import { IDObject } from '../../types/IDObject';
import { QueryOptions } from '../JSONQuery/types';

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
  T extends IDObject,
  S extends Record<string, any>
>(
  constructable: T,
  adapter = createAdapter<T>(),
  compositionMap: CompositionMapType = { compositions: {}, apiNames: {} },
) => {
  const actions = createAsyncThunksForAPI<T, S>(constructable, compositionMap);
  const slice = createSlice({
    // eslint-disable-next-line no-underscore-dangle
    name: constructable._entityName,
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
      createExtraReducers<K, T, S>(actions, adapter, builder),
  });
  return { actions, slice, adapter };
};
