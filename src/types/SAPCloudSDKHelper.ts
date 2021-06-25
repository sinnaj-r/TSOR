import {
  GetByKeyRequestBuilderV4,
  GetAllRequestBuilderV4,
  CreateRequestBuilderV4,
  UpdateRequestBuilderV4,
  DeleteRequestBuilderV4,
  RequestBuilder,
  EntityV4,
} from '@sap-cloud-sdk/core/dist';

export interface RequestBuilderInstance<T extends EntityV4>
  extends RequestBuilder<T> {
  getByKey(id: string): GetByKeyRequestBuilderV4<T>;

  getAll(): GetAllRequestBuilderV4<T>;

  create(entity: T): CreateRequestBuilderV4<T>;

  update(entity: T): UpdateRequestBuilderV4<T>;

  delete(id: string): DeleteRequestBuilderV4<T>;

  delete(entity: T): DeleteRequestBuilderV4<T>;

  delete(idOrEntity: any): DeleteRequestBuilderV4<T>;
}
