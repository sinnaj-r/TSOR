import {
  CountRequestBuilder,
  GetAllRequestBuilderV4,
} from '../../../cloud-sdk-js/packages/core/dist';
import { Selectable } from '../../../cloud-sdk-js/packages/core/dist/odata-common';

import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';
import type {
  QueryOptions,
  RequestType,
  QueryOptionsGetAll,
  RequestTypeWithoutCount,
  QueryOptionsCount,
} from './types';

import {
  buildTop,
  buildSkip,
  buildOrderBy,
  buildFilter,
  buildExpand,
} from './buildQueryOptions';
import { getField } from './helpers';

export const buildQuery = <T extends Entity>(
  requestBuilder: RequestType<T>,
  query: QueryOptions<T>,
) => {
  let req = requestBuilder;
  if (req instanceof GetAllRequestBuilderV4) {
    req = buildQueryGetAll<T>(req as GetAllRequestBuilderV4<T>, query);
    return buildQueryCommon<T>(req as GetAllRequestBuilderV4<T>, query);
  }
  if (req instanceof CountRequestBuilder) {
    return buildQueryCount<T>(
      req as CountRequestBuilder<T>,
      query as QueryOptionsCount<T>,
    );
  }
  return buildQueryCommon<T>(req as RequestTypeWithoutCount<T>, query);
};

const buildQueryCommon = <T extends Entity>(
  requestBuilder: RequestTypeWithoutCount<T>,
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
  req = buildExpand<T>(expand, requestBuilder, req);

  return req;
};

const buildQueryGetAll = <T extends Entity>(
  requestBuilderGetAll: GetAllRequestBuilderV4<T>,
  { top, skip, orderBy, filter }: QueryOptionsGetAll<T>,
) => {
  let req = requestBuilderGetAll;
  // Top $top
  req = buildTop<T>(top, req);

  // Skip $skip
  req = buildSkip<T>(skip, req);

  // Order By $orderby
  req = buildOrderBy<T>(orderBy, req);

  req = buildFilter<T, typeof req>(filter, req);

  return req;
};

const buildQueryCount = <T extends Entity>(
  requestBuilderCount: CountRequestBuilder<T>,
  { filter }: QueryOptionsCount<T>,
) => {
  const req = requestBuilderCount;

  // TODO: Filter is not supported ?
  // req = buildFilter<T, typeof req>(filter, req);

  return req;
};
