import {
  GetAllRequestBuilderV4,
  asc,
  desc,
  OrderableInput,
  CountRequestBuilder,
} from '../../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';
import { OrderBy, getField, Filter } from './types';

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

export const buildFilter = <
  T extends Entity,
  B extends GetAllRequestBuilderV4<T> | CountRequestBuilder<T>
>(
  filter: Filter<T> | undefined,
  req: B,
): B => {
  if (filter) {
    // TODO Implement Filter
    return req;
  }
  return req;
};
