/* eslint-disable no-underscore-dangle */
import { CountRequestBuilder } from '../../../../cloud-sdk-js/packages/core/dist';
import {
  Entity,
  GetAllRequestBuilderV4,
  GetByKeyRequestBuilderV4,
} from '../../../../cloud-sdk-js/packages/core/dist/odata-v4';
import { Filter } from './FilterTypes';

// Select $select
export type Select<T> = Array<keyof T | '*'>;

// Order By $orderBy
export type OrderByObject<T> = keyof T | [keyof T, 'asc' | 'desc'];
export type OrderBy<T> = Array<OrderByObject<T>>;
// | { [P in keyof T]?: OrderBy<T[P]> };

// Expand $expand

export type Expand<T extends Record<string, any>> = Array<
  keyof T | '*' | NestedExpandOptions<T>
>;

export type ExpandOptions<T> = {
  select: Select<T>;
  filter: Filter<T>;
  orderBy: OrderBy<T>;
  top: number;
  count: boolean | Filter<T>;
  expand: Expand<T>;
};

export type NestedExpandOptions<T> = {
  [P in keyof T]?: T[P] extends Array<infer E>
    ? Partial<ExpandOptions<E>>
    : Partial<ExpandOptions<T[P]>>;
};

// Full Query

export type QueryOptionsGetAll<T> = Partial<ExpandOptions<T>> & {
  skip?: number;
  count?: boolean;
};

export type QueryOptionsGetById<T> = {
  select: Select<T>;
  expand: Expand<T>;
  key: string;
};

export type QueryOptionsCount<T> = {
  filter?: Filter<T>;
};

export type QueryOptions<T extends Entity> =
  | QueryOptionsGetAll<T>
  | QueryOptionsGetById<T>
  | QueryOptionsCount<T>;

export type RequestTypeWithoutCount<T extends Entity> =
  | GetByKeyRequestBuilderV4<T>
  | GetAllRequestBuilderV4<T>;

export type RequestType<T extends Entity> =
  | RequestTypeWithoutCount<T>
  | CountRequestBuilder<T>;
