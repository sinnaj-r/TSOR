/* eslint-disable max-lines */
/* eslint-disable no-underscore-dangle */
/**
 * The jsonQuery function is used to transform a mongo-esk query to a Query with SAP Cloud SDK
 */

import {
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
} from '../../../cloud-sdk-js/packages/core/dist';
import {
  AllFields,
  asc,
  desc,
  Entity,
  OrderableInput,
  Selectable,
  StringField,
} from '../../../cloud-sdk-js/packages/core/dist/odata-common';
import { RequestBuilderInstance } from '../../types/SAPCloudSDKHelper';

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
  keyof T | NestedExpandOptions<T>
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

export const getField = <T extends Entity>(
  requestBuilder: RequestBuilders<T>,
  field: keyof T | '*',
) => {
  if (field === '*') {
    return new AllFields('*', requestBuilder._entityConstructor);
  }
  return requestBuilder._entityConstructor._allFields.find(
    (elm) => elm._fieldName === field,
  )!;
};

export type QueryOptions<T extends Entity> =
  | QueryOptionsGetAll<T>
  | QueryOptionsGetById<T>;

export const t = <T extends Entity>(
  requestBuilder: RequestBuilderInstance<T>,
  query: QueryOptions<T>,
) => {
  let req: GetByKeyRequestBuilder<T> | GetAllRequestBuilder<T>;

  const { select, expand } = query;

  // Is this a GetByKey Request, or not ?
  if ('key' in query) {
    // The SDK doesn't support expands on GetByKey, therefore we have this workaround
    if (expand) {
      req = requestBuilder.getAll();
      const key = requestBuilder._entityConstructor
        ._keyFields[0] as StringField<T>;

      req.filter(key.equals(query.key));
    } else {
      req = requestBuilder.getByKey(query.key);
    }
  } else {
    req = requestBuilder.getAll();
    req = buildQueryGetAll(req, query);
  }

  if (select) {
    req = req.select(
      ...select.map(
        (field) => getField(requestBuilder, field) as Selectable<T>,
      ),
    );
  }
};

const buildQueryGetAll = <T extends Entity>(
  requestBuilderGetAll: GetAllRequestBuilder<T>,
  { top, skip, orderBy, filter, count }: QueryOptionsGetAll<T>,
) => {
  let req = requestBuilderGetAll;
  // Top $top
  if (top) {
    req = req.top(top);
  }

  // Skip $skip
  if (skip) {
    req = req.skip(skip);
  }

  // Order By $orderby
  if (orderBy) {
    req = req.orderBy(
      ...orderBy.map((orderItem) => {
        let order: typeof asc | typeof desc;
        let field: keyof T;

        // [key, 'asc']
        if (Array.isArray(orderItem)) {
          order = orderItem[1] === 'desc' ? desc : asc;
          [field] = orderItem;
        } else {
          order = asc;
          field = orderItem;
        }
        return order<T>(
          getField(requestBuilderGetAll, field) as OrderableInput<T>,
        );
      }),
    );
  }
  if (filter) {
    // TODO Implement Filter
  }
  if (count) {
    req.count();
  }
  return req;
};
