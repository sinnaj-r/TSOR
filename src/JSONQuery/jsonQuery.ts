/* eslint-disable max-lines */
/* eslint-disable no-underscore-dangle */
/**
 * The jsonQuery function is used to transform a mongo-esk query to a Query with SAP Cloud SDK
 */

import {
  Constructable,
  Expandable,
  GetAllRequestBuilderV4,
  GetByKeyRequestBuilderV4,
  RequestBuilder,
  StringField,
} from '../../../cloud-sdk-js/packages/core/dist';
import {
  AllFields,
  asc,
  desc,
  OrderableInput,
  Selectable,
} from '../../../cloud-sdk-js/packages/core/dist/odata-common';
import { getAll, getByKey } from './RequestBuilder';

import { NewsItem } from '../../../example-output/sap-odm-service/NewsItem';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';

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

export const getField = <T extends Entity>(
  requestBuilder: RequestBuilder<T>,
  field: keyof T | '*',
) => {
  if (field === '*') {
    return new AllFields('*', requestBuilder._entityConstructor);
  }
  const result = new StringField(
    field as string,
    requestBuilder._entityConstructor,
    'Edm.String',
  );

  return result;
};

export type QueryOptions<T extends Entity> =
  | QueryOptionsGetAll<T>
  | QueryOptionsGetById<T>;

type RequestType<T extends Entity> =
  | GetByKeyRequestBuilderV4<T>
  | GetAllRequestBuilderV4<T>;

export const createRequest = <T extends Entity>(
  entity: Constructable<T>,
  query: QueryOptions<T>,
) => {
  let req: RequestType<T>;

  // Is this a GetByKey Request, or not ?
  if ('key' in query) {
    req = getByKey<T>(entity, query.key);
  } else {
    req = getAll<T>(entity);
  }

  return buildQuery(req, query);
};

const buildQuery = <T extends Entity>(
  requestBuilder: RequestType<T>,
  query: QueryOptions<T>,
) => {
  let req = requestBuilder;
  if ('filter' in req) {
    req = buildQueryGetAll(req, query);
  }
  return buildQueryGeneral(req, query);
};

const buildQueryGeneral = <T extends Entity>(
  requestBuilder: RequestType<T>,
  query: QueryOptionsGetAll<T>,
): RequestType<T> => {
  let req = requestBuilder;
  const { select, expand } = query;
  if (select) {
    req = req.select(
      ...select.map(
        (field) => getField(requestBuilder, field) as Selectable<T>,
      ),
    );
  }
  // TODO Fix Types
  if (expand) {
    const expands: Expandable<T>[] = [];

    for (const exp of expand) {
      if (typeof exp !== 'object') {
        expands.push(getField(requestBuilder, exp) as Expandable<T>);
      } else {
        for (const key of Object.keys(exp)) {
          const field = getField(requestBuilder, key as keyof typeof exp);
          const result = buildQuery(
            field as any,
            exp[key as keyof typeof exp] as any,
          );
          expands.push(result as any);
        }
      }
    }

    req = req.expand(...expands);
  }

  return req;
};

const buildQueryGetAll = <T extends Entity>(
  requestBuilderGetAll: GetAllRequestBuilderV4<T>,
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

type test = typeof NewsItem;

// TODO Types ?!
const req = createRequest(NewsItem, {
  select: ['title', 'id'],
  filter: {
    title: {
      eq: 'TSG Hoffenheim',
    },
  },
  expand: ['*'],
});
