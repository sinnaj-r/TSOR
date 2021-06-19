import {
  Constructable,
  GetAllRequestBuilderV4,
  GetByKeyRequestBuilderV4,
} from '../../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';

export const getByKey = <T extends Entity>(
  e: Constructable<T>,
  id: string,
): GetByKeyRequestBuilderV4<T> => new GetByKeyRequestBuilderV4(e, { id });

export const getAll = <T extends Entity>(
  e: Constructable<T>,
): GetAllRequestBuilderV4<T> => new GetAllRequestBuilderV4(e);
