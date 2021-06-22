/* eslint-disable no-underscore-dangle */
import {
  AllFields,
  Constructable,
  CountRequestBuilder,
  RequestBuilder,
} from '../../../../cloud-sdk-js/packages/core/dist';
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

export const getField = <T extends Entity>(
  requestBuilder: RequestBuilder<T>,
  field: keyof T | '*',
) => {
  if (field === '*') {
    return new AllFields('*', requestBuilder._entityConstructor);
  }
  return requestBuilder._entityConstructor._allFields.find(
    (f) => f._fieldName === field,
  )!;
};

export type QueryOptions<
  T extends Constructable<P>,
  P extends Entity = Entity
> =
  | QueryOptionsGetAll<InstanceType<T>>
  | QueryOptionsGetById<InstanceType<T>>
  | QueryOptionsCount<InstanceType<T>>;

export type RequestTypeWithoutCount<
  T extends Constructable<P>,
  P extends Entity = Entity
> =
  | GetByKeyRequestBuilderV4<InstanceType<T>>
  | GetAllRequestBuilderV4<InstanceType<T>>;

export type RequestType<
  T extends Constructable<P>,
  P extends Entity = Entity
> = RequestTypeWithoutCount<T> | CountRequestBuilder<InstanceType<T>>;
