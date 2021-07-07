import { QueryOptions } from '@epicbp2020/cloud-sdk-json-query';
import merge from 'deepmerge';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';

export const mergeFilter = <T extends Entity>(
  f1: QueryOptions<T>,
  f2: QueryOptions<T>,
) => {
  const overwriteMerge = (_: any, sourceArray: any) => sourceArray;
  return merge<QueryOptions<T>>(f1, f2, { arrayMerge: overwriteMerge }); // => [3, 2, 1]
};
