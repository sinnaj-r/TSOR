import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { QueryOptions } from 'odata-query';
import { IDObject } from '../../types/IDObject';
import { resolveComposition } from './compositions';
import { makeRequest } from './makeRequest';

export const createAsyncThunksForAPI = <T extends IDObject, S>(
  apiName: keyof S,
  apiPrefix: string,
): AsyncActionsType<T, S> => ({
  get: createAsyncThunk<T[], void, { state: S }>(
    `${apiName}/GET`,
    async (_, thunkAPI) => {
      // eslint-disable-next-line no-debugger
      // TODO Types
      const filter = (thunkAPI.getState() as any)[apiName].filter as Partial<
        QueryOptions<T>
      >;
      // TODO Types
      const { settings } = thunkAPI.getState() as any;
      const result = await makeRequest<typeof apiName, T, S>(
        'GET',
        apiPrefix,
        filter,
        settings as any,
      );

      const data = resolveComposition(
        thunkAPI.dispatch,
        result,
        // TODO Type
        apiName as string,
      );
      return data;
    },
  ),
  getById: createAsyncThunk<T[], string, { state: S }>(
    `${apiName}/GET_BY_ID`,
    async (key, thunkAPI) => {
      const filter = (thunkAPI.getState() as any)[apiName].filter as Partial<
        QueryOptions<T>
      >;
      // TODO Types
      const { settings } = thunkAPI.getState() as any;
      const result = await makeRequest<typeof apiName, T, S>(
        'GET',
        apiPrefix,
        { ...filter, key },
        settings,
      );

      const data = resolveComposition(
        thunkAPI.dispatch,
        result,
        // TODO Type
        apiName as string,
      );
      return data;
    },
  ),
  post: createAsyncThunk<T[], T, { state: S }>(`${apiName}/POST`, async () => {
    throw Error('Not Implemented!');
  }),
  patch: createAsyncThunk<T[], Partial<T> & { id: string }, { state: S }>(
    `${apiName}/PATCH`,
    async () => {
      throw Error('Not Implemented!');
    },
  ),
  deleteById: createAsyncThunk<T[], string, { state: S }>(
    `${apiName}/DELETE`,
    async () => {
      throw Error('Not Implemented!');
    },
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
  'get',
  'getById',
  'post',
  'patch',
  'deleteById',
];
