/* eslint-disable no-underscore-dangle */
import { AnyAction, EntitySelectors, Reducer } from '@reduxjs/toolkit';
import { Constructable } from '@sap-cloud-sdk/core/dist';
import { IDObject } from './types/IDObject';
import { createApiSlice } from './redux/createApiSlice';
import type {
  I_TSOR_SLICE,
  TAsyncActions,
  TBaseActions,
  TActions,
} from './types/TSOR-Types';
import { GenericSliceState } from './types/GenericSliceState';

export class TSOR_SLICE<T extends IDObject, S extends Record<string, any> = any>
  implements I_TSOR_SLICE<T, S, GenericSliceState<T>>
{
  _actions: TAsyncActions<T>;

  _baseActions: TBaseActions<T>;

  _selectors: EntitySelectors<T, S>;

  _reducer: Reducer<GenericSliceState<T>, AnyAction>;

  routeKey: string;

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
    this.routeKey = routeName;
  }

  getActions(): TActions<T> {
    return { ...this._actions, ...this._baseActions };
  }

  getReducer() {
    return this._reducer;
  }

  getSelectors() {
    return this._selectors;
  }
}
