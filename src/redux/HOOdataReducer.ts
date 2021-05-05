/* eslint-disable no-param-reassign */
import { QueryOptions } from "odata-query";
import {
  ActionReducerMapBuilder,
  createEntityAdapter,
  createSlice,
  Dictionary,
  Draft,
  EntityAdapter,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";

import {
  ActionsKeys,
  AsyncActionsType,
  ApiActionKeys,
  createAsyncThunksForAPI,
} from "./HOAsyncThunks";
import { IDObject } from "../../types/IDObject";
import { GenericSliceState } from "../../types/GenericSliceState";
import { GenericReducers } from "../../types/GenericReducers";

const createAdapter = <T>() => createEntityAdapter<T>({});

/**
 *  This Functions adds the Reducers of our ActionTypes to the HO API Slide.
 *
 * @template T
 * @param {string} apiName
 * @param {AsyncActionsType<T>} thunkActions
 * @param {EntityAdapter<T>} adapter
 * @param {ActionReducerMapBuilder<GenericSliceState<T>>} builder
 */
const createExtraReducers = <K extends string, T extends IDObject, S>(
  apiName: K,
  thunkActions: AsyncActionsType<T, S>,
  adapter: EntityAdapter<T>,
  builder: ActionReducerMapBuilder<GenericSliceState<T>>
) => {
  for (const key of ApiActionKeys) {
    builder.addCase(
      thunkActions[key as ActionsKeys].fulfilled,
      (state, action) => {
        state.loading = "idle";
        state.error = undefined;
        adapter.setAll(state as GenericSliceState<T>, action.payload);
      }
    );
    builder.addCase(
      thunkActions[key as ActionsKeys].pending,
      (state, _action) => {
        state.loading = "pending";
        state.error = undefined;
      }
    );
    builder.addCase(
      thunkActions[key as ActionsKeys].rejected,
      (state, action) => {
        state.loading = "rejected";
        state.error = action.error;
      }
    );
  }
};

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
  apiName: K,
  adapter = createAdapter<T>(),
  apiPrefix: string = apiName
) => {
  const actions = createAsyncThunksForAPI<T, S>(apiName, apiPrefix);
  const slice = createSlice({
    name: apiName,
    initialState: {
      ...adapter.getInitialState({
        loading: "idle",
      }),
      filter: {},
    } as GenericSliceState<T>,
    reducers: {
      setFilter(state, action: PayloadAction<GenericSliceState<T>["filter"]>) {
        // eslint-disable-next-line no-param-reassign
        (state.filter as Partial<QueryOptions<T>>) = action.payload;
      },
      dismissError(state) {
        state.error = undefined;
        state.loading = "idle";
      },
      clear(state) {
        state.error = undefined;
        state.loading = "idle";
        state.filter = {};
        adapter.removeAll(state as GenericSliceState<T>);
      },
      setAll(state, action: PayloadAction<T[]>) {
        adapter.setAll(state as EntityState<T>, action.payload);
      },
    } as GenericReducers<T>,
    extraReducers: (builder) =>
      createExtraReducers<K, T, S>(apiName, actions, adapter, builder),
  });
  return { actions, slice, adapter };
};
