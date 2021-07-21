import { QueryOptions } from 'cloud-sdk-json-query';
import merge from 'deepmerge';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
/**
 * Merges two different Filter Objects
 *
 * @template T The SDK Entity Type
 * @param {QueryOptions<T>} f1 First JSON Filter
 * @param {QueryOptions<T>} f2 Second JSON Filter
 * @returns
 */
export const mergeFilter = <T extends Entity>(
  f1: QueryOptions<T>,
  f2: QueryOptions<T>,
) => {
  const overwriteMerge = (_: any, sourceArray: any) => sourceArray;
  return merge<QueryOptions<T>>(f1, f2, { arrayMerge: overwriteMerge }); // => [3, 2, 1]
};
