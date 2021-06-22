/* eslint-disable no-underscore-dangle */
import {
  AllFields,
  RequestBuilder,
} from '../../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';

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
