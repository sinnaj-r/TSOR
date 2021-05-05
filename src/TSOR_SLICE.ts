import { createApiSlice } from "./redux/HOOdataReducer";
import { IDObject } from "../types/IDObject";
import { BusinessPartnerType } from "../../example-output/sap-odm-service/BusinessPartner";
import { ProductType } from "../../example-output/sap-odm-service/Product";
import { AsyncActionsType } from "./redux/HOAsyncThunks";
import { combineReducers } from "redux";
import {
  AnyAction,
  CaseReducerActions,
  configureStore,
  EntitySelectors,
  EntityState,
  getDefaultMiddleware,
  Reducer,
} from "@reduxjs/toolkit";
import { GenericSliceState } from "../types/GenericSliceState";
import { GenericReducers } from "../types/GenericReducers";

export type TAsyncActions<
  K extends string,
  T extends IDObject
> = AsyncActionsType<T, any>;

export type TBaseActions<T extends IDObject> = CaseReducerActions<
  GenericReducers<T>
>;

export type TActions<K extends string, T extends IDObject> = TAsyncActions<
  K,
  T
> &
  TBaseActions<T>;

export class TSOR_SLICE<
  K extends string,
  T extends IDObject,
  S extends Record<string, any>
> {
  private _actions: TAsyncActions<K, T>;
  private _baseActions: TBaseActions<T>;
  selectors: EntitySelectors<T, S>;
  reducer: Reducer<GenericSliceState<T>, AnyAction>;
  routeKey: K;
  constructor(routeName: K, routeSuffix: string = routeName) {
    const { adapter, actions, slice } = createApiSlice<K, T, S>(
      routeName,
      undefined,
      routeSuffix
    );
    this.reducer = slice.reducer;
    this._actions = actions;
    this._baseActions = slice.actions;
    this.selectors = adapter.getSelectors((state) => state[routeName]);
    this.routeKey = routeName;
  }
  getActions(): TActions<K, T> {
    return { ...this._actions, ...this._baseActions };
  }
}
