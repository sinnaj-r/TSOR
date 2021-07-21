import { EntityState, SerializedError } from '@reduxjs/toolkit';
import { QueryOptions } from 'cloud-sdk-json-query';

import { IDObject } from './IDObject';

export type GenericSliceState<T extends IDObject> = EntityState<T> & {
  filter: QueryOptions<T>;
  loading: 'idle' | 'pending' | 'rejected';
  error?: SerializedError;
};
