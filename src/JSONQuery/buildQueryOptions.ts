/* eslint-disable max-lines */
import {
  GetAllRequestBuilderV4,
  asc,
  desc,
  OrderableInput,
  Expandable,
} from '../../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';
import { getField } from './helpers';
import type { OrderBy, Expand, RequestTypeWithoutCount } from './types';
import type { Filter } from './types/FilterTypes';

export const buildTop = <T extends Entity>(
  top: number | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (top) {
    return req.top(top);
  }
  return req;
};

export const buildSkip = <T extends Entity>(
  skip: number | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (skip) {
    return req.skip(skip);
  }
  return req;
};

export const buildOrderBy = <T extends Entity>(
  orderBy: OrderBy<T> | undefined,
  req: GetAllRequestBuilderV4<T>,
) => {
  if (orderBy) {
    return req.orderBy(
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
        return order<T>(getField(req, field) as OrderableInput<T>);
      }),
    );
  }
  return req;
};

/*
const parseFilterValue = <T extends Entity>(
  filter: Filter<T>,
  key: string,
): SDKFilter<T, any>[] => {
  const value = filter[key] as any;
  // Implicit in
  if (Array.isArray(value)) {
    // TODO
    return [];
  }
  // Complex Query (logic, in, gte, any, ...)
  if (typeof value === 'object') {
    // TODO
    return [];
  }

  
  if (typeof value === 'string') {
    // String Filter Stmnt
    if (
      value.match(
        /(^tolower)|(^toupper)|(^trim)|(^substring)|(^concat)|(^contains)|(^endswith)|(^startswith)|(^concat)|(^contains)|(^endswith)|(^startswith)/,
      )
    ) {
      // TODO
      return [];
    }
  } 

  // Normal Filter
  return [new SDKFilter<T, string>(key, 'eq', value)];
};
*/

// | FilterStatements<T, Extract<keyof T, string>>
// | (NormalFilter<T> & StringFilter<T> & LogicFilter<T>);
const parseFilterKey = (filter: Filter<any>) =>
  /* const generatedFilters: any[] = [];
  // Filter is array

  if (Array.isArray(filter)) {
    // TODO
    return [];
  }
  // Filter is a Statement
  if (typeof filter === 'string') {
    // TODO
    return [];
  }

  for (const key of Object.keys(filter)) {
    // Logical Operator
    if (LOGICAL_OPERATORS.includes(key as any)) {
      // TODO
    }
    // String Filter
    if (key.match(/(^tolower)|(^toupper)|(^trim)|(^substring)/)) {
      // TODO
    }

    // Normal Match
    // generatedFilters.push(...parseFilterValue(filter, key));
  }

  return generatedFilters; */
  [];
export const buildFilter = <
  T extends Entity,
  B extends GetAllRequestBuilderV4<T>
>(
  filter: Filter<T> | undefined,
  req: B,
): B => {
  if (filter) {
    const filterArr = parseFilterKey(filter);
    return req.filter();
  }
  return req;
};

export const buildExpand = <T extends Entity>(
  expand: Expand<T>,
  requestBuilder: RequestTypeWithoutCount<T>,
  req: RequestTypeWithoutCount<T>,
) => {
  if (expand) {
    const expands: Expandable<T>[] = [];

    return req;
    // TODO Fix Dep Cycle for Expand
    /*
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

    return req.expand(...expands);
    */
  }
  return req;
};
