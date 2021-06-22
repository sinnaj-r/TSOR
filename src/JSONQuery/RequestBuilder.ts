import {
  Constructable,
  GetAllRequestBuilderV4,
  GetByKeyRequestBuilderV4,
} from '../../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';

export const getByKey = <T extends Constructable<P>, P extends Entity = Entity>(
  e: T,
  id: string,
): GetByKeyRequestBuilderV4<P> => new GetByKeyRequestBuilderV4<P>(e, { id });

export const getAll = <T extends Constructable<P>, P extends Entity = Entity>(
  e: T,
): GetAllRequestBuilderV4<P> => new GetAllRequestBuilderV4<P>(e);
