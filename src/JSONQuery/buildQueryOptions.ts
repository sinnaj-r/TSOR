/* eslint-disable max-lines */
import op from 'object-path';
import {
  GetAllRequestBuilderV4,
  asc,
  desc,
  OrderableInput,
  Expandable,
  Filter as SDKFilter,
  and,
  toLower,
  toUpper,
  substring,
  concat,
  endsWith,
  startsWith,
  StringFilterFunction,
} from '../../../cloud-sdk-js/packages/core/dist';
import {
  contains,
  Entity,
} from '../../../cloud-sdk-js/packages/core/dist/odata-v4';
import { last, trim } from '../../../cloud-sdk-js/packages/util/dist';
// eslint-disable-next-line import/no-cycle
import { buildQuery } from './buildQuery';
import { getField } from './helpers';
import type { OrderBy, Expand, RequestTypeWithoutCount } from './types';
import type { Filter } from './types/FilterTypes';
import { COMPARISON_OPERATORS } from './types/OperatorTypes';

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

const isUnaryExpression = (str: string) =>
  str.match(/(^contains)|(^endswith)|(^startswith)/);

const isBinaryExpression = (str: string) =>
  str.match(/(^tolower)|(^toupper)|(^trim)|(^substring)|(^concat)|/);

const parseStringFunction = <T extends Entity>(str: string) => {
  // String Filter Stmnt
  const match =
    typeof str === 'string' &&
    (isUnaryExpression(str) || isBinaryExpression(str));
  if (!match?.[0]) {
    return str;
  }
  const operator = match[0];
  const args: (string | StringFilterFunction<T>)[] = str
    .replace(`${operator}(`, '')
    .replace(')', '')
    .split(',')
    .map((elm) => JSON.parse(elm))
    .map(
      (elm) => parseStringFunction<T>(elm) as StringFilterFunction<T> | string,
    );

  switch (operator) {
    case 'tolower':
      return toLower<T>(args[0]);
    case 'toupper':
      return toUpper<T>(args[0]);
    case 'trim':
      return trim(args[0] as string);
    case 'substring':
      return substring<T>(args[0], parseInt(args[1] as string, 10));
    case 'concat':
      return concat<T>(args[0], args[1]);
    case 'contains':
      return contains<T>(args[0], args[1]);
    case 'endswith':
      return endsWith<T>(args[0], args[1]);
    case 'startswith':
      return startsWith<T>(args[0], args[1]);
    default:
      return str;
  }
};

const createFilter = <T extends Entity>(
  path: (string | number)[] = [],
  operator: typeof COMPARISON_OPERATORS[number],
  value: any,
  ignoreNKeys: number[] = [],
) =>
  new SDKFilter<T, string>(
    path
      .filter((_, i) => !ignoreNKeys.includes(i))
      .map(parseStringFunction)
      .join('/'),
    operator,
    parseStringFunction(value) as any,
  );

const parseFilterValue = <T extends Entity>(
  filter: Filter<T>,
  path: (string | number)[],
  ignoreNKeys: number[] = [],
): SDKFilter<T, any>[] => {
  const lastKey = last(path);
  const value = op.get(filter as any, path);

  if (Array.isArray(value)) {
    // Implicit Root-Level And
    if (path.length === 0 || lastKey === 'and') {
      const filters: SDKFilter<T, any>[] = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < value.length; i++) {
        filters.push(
          ...parseFilterValue(
            filter,
            [...path, i],
            [...ignoreNKeys, path.length - 1, path.length],
          ),
        );
      }
      // TODO fix Types
      return [and(...filters) as any];
    }

    // Explicit or implicit 'in'
    if (lastKey === 'in') {
      throw new Error('In is not supported by the SDK');
    }
  }

  // Complex Query (logic, in, gte, any, ...)
  if (typeof value === 'object') {
    const filters: SDKFilter<T, any>[] = [];
    for (const key of Object.keys(value)) {
      filters.push(...parseFilterValue(filter, [...path, key], ignoreNKeys));
    }
    return filters;
  }

  // primitive filter filter
  if (['string', 'number'].includes(typeof value)) {
    // Comparision
    if (COMPARISON_OPERATORS.includes(lastKey as any)) {
      return [
        createFilter(
          path.slice(0, -1),
          lastKey as typeof COMPARISON_OPERATORS[number],
          value,
          ignoreNKeys,
        ),
      ];
    }
  }
  // String Expr
  if (typeof value === 'string' && isUnaryExpression(value)) {
    return [parseStringFunction(value) as any];
  }

  return [createFilter(path, 'eq', value, ignoreNKeys)];
};

// | FilterStatements<T, Extract<keyof T, string>>
// | (NormalFilter<T> & StringFilter<T> & LogicFilter<T>);
const parseFilterKey = (filter: Filter<any>) => {
  const generatedFilters: any[] = [];
  generatedFilters.push(...parseFilterValue(filter, []));

  return generatedFilters;
};

export const buildFilter = <
  T extends Entity,
  B extends GetAllRequestBuilderV4<T>
>(
  filter: Filter<T> | undefined,
  req: B,
): B => {
  if (filter) {
    const filterArr = parseFilterKey(filter);
    return req.filter(...filterArr);
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

    // TODO Fix Dep Cycle for Expand

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
  }
  return req;
};
