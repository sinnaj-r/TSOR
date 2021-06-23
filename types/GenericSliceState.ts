import { EntityState, SerializedError } from '@reduxjs/toolkit';
import { QueryOptions } from 'cloud-sdk-json-query/src/index';

import { IDObject } from './IDObject';

export type GenericSliceState<T extends IDObject> = EntityState<T> & {
  filter: Partial<QueryOptions<T>>;
  loading: 'idle' | 'pending' | 'rejected';
  error?: SerializedError;
};
