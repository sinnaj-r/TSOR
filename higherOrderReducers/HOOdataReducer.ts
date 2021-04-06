/* eslint-disable no-param-reassign */
import { QueryOptions } from 'odata-query';
import {
  ActionReducerMapBuilder,
  createEntityAdapter,
  createSlice,
  Dictionary,
  Draft,
  EntityAdapter,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RouteKey } from '../ROUTES';

import {
  ActionsKeys,
  ActionsType,
  ApiActionKeys,
  createAsyncThunksForAPI,
} from './HOAsyncThunks';

export type IDObject = { id: string };

export type GenericState<T extends IDObject> = {
  filter: Partial<QueryOptions<T>>;
  ids: (string | number)[];
  entities: Dictionary<T>;
  loading: 'idle' | 'pending' | 'rejected';
  error?: any;
};

const createAdapter = <T>() => createEntityAdapter<T>({});

/**
 *  This Functions adds the Reducers of our ActionTypes to the HO API Slide.
 *
 * @template T
 * @param {string} apiName
 * @param {ActionsType<T>} thunks
 * @param {EntityAdapter<T>} adapter
 * @param {ActionReducerMapBuilder<GenericState<T>>} builder
 */
const createExtraReducers = <T extends IDObject>(
  apiName: RouteKey,
  thunks: ActionsType<T>,
  adapter: EntityAdapter<T>,
  builder: ActionReducerMapBuilder<GenericState<T>>,
) => {
  for (const key of ApiActionKeys) {
    builder.addCase(thunks[key as ActionsKeys].fulfilled, (state, action) => {
      state.loading = 'idle';
      state.error = undefined;
      adapter.setAll(state as GenericState<T>, action.payload);
    });
    builder.addCase(thunks[key as ActionsKeys].pending, (state, _action) => {
      state.loading = 'pending';
      state.error = undefined;
    });
    builder.addCase(thunks[key as ActionsKeys].rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = action.error;
    });
  }
};

/**
 * The main HO-Function for creating an Redux-Toolkit Slice for an generic API-Route e.g. product or BuPa
 *
 * @template T
 * @param {string} apiName
 * @returns
 */
export const createApiSlice = <T extends IDObject>(
  apiName: RouteKey,
  adapter = createAdapter<T>(),
) => {
  const actions = createAsyncThunksForAPI<T>(apiName);
  const slice = createSlice({
    name: apiName,
    initialState: {
      ...adapter.getInitialState({
        loading: 'idle',
      }),
      filter: {},
    } as GenericState<T>,
    reducers: {
      setFilter(state, action: PayloadAction<GenericState<T>['filter']>) {
        // eslint-disable-next-line no-param-reassign
        state.filter = action.payload as Draft<Partial<QueryOptions<T>>>;
      },
      dismissError(state) {
        state.error = undefined;
        state.loading = 'idle';
      },
      clear(state) {
        state.error = undefined;
        state.loading = 'idle';
        state.filter = {};
        adapter.removeAll(state as GenericState<T>);
      },
      setAll(state, action: PayloadAction<T[]>) {
        adapter.setAll(state as EntityState<T>, action.payload);
      },
    },
    extraReducers: (builder) =>
      createExtraReducers<T>(apiName, actions, adapter, builder),
  });
  return { actions, slice, adapter };
};
