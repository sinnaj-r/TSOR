import { QueryOptions } from 'odata-query';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { resolveComposition } from '../compositions';
import { RouteKeyType } from '../ROUTES';
import type { IDObject } from './HOOdataReducer';
import { makeRequest } from './makeRequest';
import type { RootState } from '../store';

export const createAsyncThunksForAPI = <T extends IDObject>(
  apiName: RouteKeyType,
): ActionsType<T> => ({
  get: createAsyncThunk<T[], void, { state: RootState }>(
    `${apiName}/GET`,
    async (_, thunkAPI) => {
      // eslint-disable-next-line no-debugger
      const filter = thunkAPI.getState()[apiName].filter as Partial<
        QueryOptions<T>
      >;
      const { settings } = thunkAPI.getState();
      const result = await makeRequest<T>('GET', apiName, filter, settings);

      const data = resolveComposition(thunkAPI.dispatch, result, apiName);
      return data;
    },
  ),
  getById: createAsyncThunk<T[], string, { state: RootState }>(
    `${apiName}/GET_BY_ID`,
    async () => {
      const response: any = {}; // Fetch Data here
      return response.data as T[];
    },
  ),
  post: createAsyncThunk<T[], T, { state: RootState }>(
    `${apiName}/POST`,
    async () => {
      const response: any = {}; // Fetch Data here
      return response.data as T[];
    },
  ),
  patch: createAsyncThunk<
    T[],
    Partial<T> & { id: string },
    { state: RootState }
  >(`${apiName}/PATCH`, async () => {
    const response: any = {}; // Fetch Data here
    return response.data as T[];
  }),
  deleteById: createAsyncThunk<T[], string, { state: RootState }>(
    `${apiName}/DELETE`,
    async () => {
      const response: any = {}; // Fetch Data here
      return response.data as T[];
    },
  ),
});

export type ActionsType<T> = {
  get: AsyncThunk<T[], void, { state: RootState }>;
  getById: AsyncThunk<T[], string, { state: RootState }>;
  post: AsyncThunk<T[], T, { state: RootState }>;
  patch: AsyncThunk<
    T[],
    Partial<T> & {
      id: string;
    },
    {}
  >;
  deleteById: AsyncThunk<T[], string, { state: RootState }>;
};

export type ActionsKeys = keyof ActionsType<null>;
export const ApiActionKeys: ActionsKeys[] = [
  'get',
  'getById',
  'post',
  'patch',
  'deleteById',
];
