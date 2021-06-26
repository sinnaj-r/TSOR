import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { Constructable } from '@sap-cloud-sdk/core/dist';
import { QueryOptions } from '@epicbp2020/cloud-sdk-json-query';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';

import { IDObject } from '../types/IDObject';

import { CompositionMapType, resolveComposition } from './compositions';
import { makeRequest } from './makeRequest';

export const createAsyncThunksForAPI = <T extends IDObject, S>(
  constructable: Constructable<T>,
  compositionMap: CompositionMapType,
  // eslint-disable-next-line no-underscore-dangle
  apiName = constructable._entityName,
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
        constructable,
        filter,
        settings as any,
      );

      const data = resolveComposition(
        thunkAPI.dispatch,
        result,
        // TODO Type
        apiName as string,
        compositionMap,
      );
      return data;
    },
  ),
  getWithFilter: createAsyncThunk<T[], QueryOptions<T>, { state: S }>(
    `${apiName}/GET_WITH_FILTER`,
    async (filter, thunkAPI) => {
      // eslint-disable-next-line no-debugger
      const globalFilter = (thunkAPI.getState() as any)[apiName]
        .filter as QueryOptions<T>;
      const { settings } = thunkAPI.getState() as any;
      const result = await makeRequest<typeof apiName, T, S>(
        constructable,
        { ...globalFilter, ...filter },

        settings as any,
      );

      const data = resolveComposition(
        thunkAPI.dispatch,
        result,
        // TODO Type
        apiName as string,
        compositionMap,
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
// TODO Get Type more intelligent
export type AsyncActionsType<T extends Entity, S> = {
  get: AsyncThunk<T[], void, { state: S }>;
  getWithFilter: AsyncThunk<T[], QueryOptions<T>, { state: S }>;
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

export type ActionsKeys = keyof AsyncActionsType<any, null>;
export const ApiActionKeys: ActionsKeys[] = [
  'get',
  'getWithFilter',
  'post',
  'patch',
  'deleteById',
];
