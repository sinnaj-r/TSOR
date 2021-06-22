/* eslint-disable max-lines */
/* eslint-disable no-underscore-dangle */
/**
 * The jsonQuery function is used to transform a mongo-esk query to a Query with SAP Cloud SDK
 */

import { getAll, getByKey } from './RequestBuilder';

import { QueryOptions, RequestType } from './types';
import { buildQuery } from './buildQuery';

import { EntityV4 } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';
import { Constructable } from '../../../cloud-sdk-js/packages/core/dist';

export const createRequest = <T extends EntityV4>(
  entity: Constructable<T>,
  query: QueryOptions<T>,
) => {
  let req: RequestType<T>;

  // Is this a GetByKey Request
  if ('key' in query) {
    req = getByKey<T>(entity, query.key);
  } else if ('count' in query) {
    req = getAll<T>(entity).count();
  } else {
    req = getAll<T>(entity);
  }

  return buildQuery(req, query);
};
