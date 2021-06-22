/* eslint-disable no-dupe-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  RequestBuilder,
  GetAllRequestBuilderV4,
  GetByKeyRequestBuilderV4,
  CreateRequestBuilderV4,
  UpdateRequestBuilderV4,
  DeleteRequestBuilderV4,
} from '@sap-cloud-sdk/core';
import { ExampleItem1 } from './ExampleItem1';

/**
 * Request builder class for operations supported on the [[ExampleItem1]] entity.
 */
export class ExampleItem1RequestBuilder extends RequestBuilder<ExampleItem1> {
  /**
   * Returns a request builder for retrieving one `ExampleItem1` entity based on its keys.
   * @param id Key property. See [[ExampleItem1.id]].
   * @returns A request builder for creating requests to retrieve one `ExampleItem1` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilderV4<ExampleItem1> {
    return new GetByKeyRequestBuilderV4(ExampleItem1, { id });
  }

  /**
   * Returns a request builder for querying all `ExampleItem1` entities.
   * @returns A request builder for creating requests to retrieve all `ExampleItem1` entities.
   */
  getAll(): GetAllRequestBuilderV4<ExampleItem1> {
    return new GetAllRequestBuilderV4(ExampleItem1);
  }

  /**
   * Returns a request builder for creating a `ExampleItem1` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExampleItem1`.
   */
  create(entity: ExampleItem1): CreateRequestBuilderV4<ExampleItem1> {
    return new CreateRequestBuilderV4(ExampleItem1, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ExampleItem1`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExampleItem1`.
   */
  update(entity: ExampleItem1): UpdateRequestBuilderV4<ExampleItem1> {
    return new UpdateRequestBuilderV4(ExampleItem1, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExampleItem1`.
   * @param id Key property. See [[ExampleItem1.id]].
   * @returns A request builder for creating requests that delete an entity of type `ExampleItem1`.
   */
  delete(id: string): DeleteRequestBuilderV4<ExampleItem1>;

  /**
   * Returns a request builder for deleting an entity of type `ExampleItem1`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExampleItem1` by taking the entity as a parameter.
   */
  delete(entity: ExampleItem1): DeleteRequestBuilderV4<ExampleItem1>;

  delete(idOrEntity: any): DeleteRequestBuilderV4<ExampleItem1> {
    return new DeleteRequestBuilderV4(
      ExampleItem1,
      idOrEntity instanceof ExampleItem1 ? idOrEntity : { id: idOrEntity! },
    );
  }
}
