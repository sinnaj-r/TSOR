/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, EntityAdapter } from '@reduxjs/toolkit';

import {
  ActionsKeys,
  AsyncActionsType,
  ApiActionKeys,
} from './createAsyncThunksForAPI';
import { IDObject } from '../types/IDObject';
import { GenericSliceState } from '../types/GenericSliceState';

/**
 *  This Functions adds the Reducers of the Thunks to the Higher Order API Slide.
 *
 * @template T
 * @param {string} apiName
 * @param {AsyncActionsType<T>} thunkActions
 * @param {EntityAdapter<T>} adapter
 * @param {ActionReducerMapBuilder<GenericSliceState<T>>} builder
 */
export const createExtraReducers = <T extends IDObject, S>(
  thunkActions: AsyncActionsType<T, S>,
  adapter: EntityAdapter<T>,
  builder: ActionReducerMapBuilder<GenericSliceState<T>>,
) => {
  for (const key of ApiActionKeys) {
    builder.addCase(
      thunkActions[key as ActionsKeys].fulfilled,
      (state, action) => {
        state.loading = 'idle';
        state.error = undefined;
        adapter.upsertMany(state as GenericSliceState<T>, action.payload);
      },
    );
    builder.addCase(
      thunkActions[key as ActionsKeys].pending,
      (state, _action) => {
        state.loading = 'pending';
        state.error = undefined;
      },
    );
    builder.addCase(
      thunkActions[key as ActionsKeys].rejected,
      (state, action) => {
        state.loading = 'rejected';
        state.error = action.error;
      },
    );
  }
};
