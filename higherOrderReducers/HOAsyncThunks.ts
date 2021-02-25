import { QueryOptions } from 'odata-query';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import type { IDObject } from './HOOdataReducer';
import { makeRequest } from './makeRequest';
import type { RootState } from '../store';

/**
 * Creates Async Thunk Actions for use in our HOReducer.
 * All HTTP-Methods are supported.
 *
 * @template T
 * @param {string} apiName
 * @returns {ActionsType<T>}
 */
export const createAsyncThunksForAPI = <T extends IDObject>(
  apiName: string,
): ActionsType<T> => ({
  get: createAsyncThunk<T[], void, { state: RootState }>(
    `${apiName}/GET`,
    async (_, thunkAPI) => {
      // eslint-disable-next-line no-debugger
      const filter = thunkAPI.getState().product.filter as Partial<
        QueryOptions<T>
      >;
      const { settings } = thunkAPI.getState();
      return makeRequest<T>('GET', 'product', filter, settings);
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
