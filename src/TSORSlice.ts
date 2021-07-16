/* eslint-disable no-underscore-dangle */
import {
  AnyAction,
  createSelector,
  EntitySelectors,
  Reducer,
} from '@reduxjs/toolkit';
import { Constructable } from '@sap-cloud-sdk/core/dist';
import { IDObject } from './types/IDObject';
import { createApiSlice } from './redux/createApiSlice';
import type {
  ITSORSlice,
  TAsyncActions,
  TBaseActions,
  TActions,
} from './types/TSOR-Types';
import { GenericSliceState } from './types/GenericSliceState';

export class TSORSlice<T extends IDObject, S extends Record<string, any> = any>
  implements ITSORSlice<T, S, GenericSliceState<T>>
{
  _actions: TAsyncActions<T>;

  _baseActions: TBaseActions<T>;

  _selectors: EntitySelectors<T, S>;

  _reducer: Reducer<GenericSliceState<T>, AnyAction>;

  routeName: string;

  constructor(
    constructable: Constructable<T>,
    routeName = constructable._entityName,
  ) {
    // eslint-disable-next-line no-underscore-dangle

    const { adapter, actions, slice } = createApiSlice<T, S>(
      constructable,
      undefined,
    );
    this._reducer = slice.reducer;
    this._actions = actions;
    this._baseActions = slice.actions;
    this._selectors = adapter.getSelectors((state) => state[routeName]);
    this.routeName = routeName;
  }

  getActions(): TActions<T> {
    return { ...this._actions, ...this._baseActions };
  }

  getReducer() {
    return this._reducer;
  }

  getSelectors() {
    const selectLoadingStatus = createSelector(
      (state: S) => (state[this.routeName] as GenericSliceState<T>).loading,
      (loading) => loading,
    );

    const selectIsPending = createSelector(
      selectLoadingStatus,
      (loading) => loading === 'pending',
    );

    const selectIsRejected = createSelector(
      selectLoadingStatus,
      (loading) => loading === 'rejected',
    );

    const selectIsIdling = createSelector(
      selectLoadingStatus,
      (loading) => loading === 'idle',
    );

    const selectError = createSelector(
      (state: S) => (state[this.routeName] as GenericSliceState<T>).error,
      (error) => error,
    );

    const selectFilter = createSelector(
      (state: S) => (state[this.routeName] as GenericSliceState<T>).filter,
      (filter) => filter,
    );

    return {
      ...this._selectors,
      selectIsPending,
      selectError,
      selectIsRejected,
      selectIsIdling,
      selectLoadingStatus,
      selectFilter,
    };
  }
}
