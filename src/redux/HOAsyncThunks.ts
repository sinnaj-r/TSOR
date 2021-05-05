import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { IDObject } from "../../types/IDObject";
import { resolveComposition } from "./compositions";
import { makeRequest } from "./makeRequest";
import { QueryOptions } from "odata-query";
import { GenericSliceState } from "../../types/GenericSliceState";
import { GenericState } from "../../types/GenericState";

export const createAsyncThunksForAPI = <
  T extends IDObject,
  S extends GenericState
>(
  apiName: keyof S
): AsyncActionsType<T, S> => ({
  get: createAsyncThunk<T[], void, { state: S }>(
    `${apiName}/GET`,
    async (_, thunkAPI) => {
      // eslint-disable-next-line no-debugger
      const filter = thunkAPI.getState()[apiName].filter as Partial<
        QueryOptions<T>
      >;
      const { settings } = thunkAPI.getState();
      const result = await makeRequest<typeof apiName, T, S>(
        "GET",
        apiName,
        filter,
        settings
      );

      const data = resolveComposition(thunkAPI.dispatch, result, apiName);
      return data;
    }
  ),
  getById: createAsyncThunk<T[], string, { state: S }>(
    `${apiName}/GET_BY_ID`,
    async () => {
      const response: any = {}; // Fetch Data here
      return response.data as T[];
    }
  ),
  post: createAsyncThunk<T[], T, { state: S }>(`${apiName}/POST`, async () => {
    const response: any = {}; // Fetch Data here
    return response.data as T[];
  }),
  patch: createAsyncThunk<T[], Partial<T> & { id: string }, { state: S }>(
    `${apiName}/PATCH`,
    async () => {
      const response: any = {}; // Fetch Data here
      return response.data as T[];
    }
  ),
  deleteById: createAsyncThunk<T[], string, { state: S }>(
    `${apiName}/DELETE`,
    async () => {
      const response: any = {}; // Fetch Data here
      return response.data as T[];
    }
  ),
});

export type AsyncActionsType<T, S> = {
  get: AsyncThunk<T[], void, { state: S }>;
  getById: AsyncThunk<T[], string, { state: S }>;
  post: AsyncThunk<T[], T, { state: S }>;
  patch: AsyncThunk<
    T[],
    Partial<T> & {
      id: string;
    },
    {}
  >;
  deleteById: AsyncThunk<T[], string, { state: S }>;
};

export type ActionsKeys = keyof AsyncActionsType<null, null>;
export const ApiActionKeys: ActionsKeys[] = [
  "get",
  "getById",
  "post",
  "patch",
  "deleteById",
];
