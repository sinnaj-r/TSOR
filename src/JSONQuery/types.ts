/* eslint-disable no-underscore-dangle */
import {
  AllFields,
  CountRequestBuilder,
  RequestBuilder,
} from '../../../cloud-sdk-js/packages/core/dist';
import {
  Entity,
  GetAllRequestBuilderV4,
  GetByKeyRequestBuilderV4,
} from '../../../cloud-sdk-js/packages/core/dist/odata-v4';

const COMPARISON_OPERATORS = ['eq', 'ne', 'gt', 'ge', 'lt', 'le'] as const;
const LOGICAL_OPERATORS = ['and', 'or', 'not'] as const;
const COLLECTION_OPERATORS = ['any', 'all'] as const;
const SUPPORTED_EXPAND_PROPERTIES = [
  'expand',
  'select',
  'top',
  'count',
  'orderby',
  'filter',
] as const;

// Select $select
export type Select<T> = Array<keyof T | '*'>;

// Order By $orderBy
export type OrderByObject<T> = keyof T | [keyof T, 'asc' | 'desc'];
export type OrderBy<T> = Array<OrderByObject<T>>;
// | { [P in keyof T]?: OrderBy<T[P]> };

// Filter $filter
export type FilterObject<T> = {
  [P in keyof T]?: T[P] | { [O in typeof COMPARISON_OPERATORS[number]]?: T[P] };
} &
  { [M in typeof COLLECTION_OPERATORS[number]]?: FilterObject<T> } &
  { [K in typeof LOGICAL_OPERATORS[number]]?: FilterObject<T> };

export type Filter<T> = FilterObject<T> | Array<FilterObject<T>>;

export type FilterKey<T> = keyof FilterObject<T>;

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
