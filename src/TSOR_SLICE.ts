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
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";
import { GenericState } from "../types/GenericState";
import { GenericSliceState } from "../types/GenericSliceState";
import { GenericReducers } from "../types/GenericReducers";

export type TAsyncActions<
  K extends string,
  T extends IDObject
> = AsyncActionsType<T, Record<K, GenericSliceState<T>>>;

export type TBaseActions<T extends IDObject> = CaseReducerActions<
  GenericReducers<T>
>;

export type TActions<K extends string, T extends IDObject> = TAsyncActions<
  K,
  T
> &
  TBaseActions<T>;

export class TSOR_SLICE<K extends string, T extends IDObject> {
  private _actions: TAsyncActions<K, T>;
  private _baseActions: TBaseActions<T>;
  selectors: EntitySelectors<T, Record<K, GenericSliceState<T>>>;
  reducer: Reducer<GenericSliceState<T>, AnyAction>;
  routeKey: K;
  constructor(routeKey: K) {
    const { adapter, actions, slice } = createApiSlice<
      K,
      T,
      Record<K, GenericSliceState<T>>
    >(routeKey);
    this.reducer = slice.reducer;
    this._actions = actions;
    this._baseActions = slice.actions;
    this.selectors = adapter.getSelectors((state) => state[routeKey]);
    this.routeKey = routeKey;
  }
  getActions(): TActions<K, T> {
    return { ...this._actions, ...this._baseActions };
  }
}
