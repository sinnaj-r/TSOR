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
import { ExampleItem2 } from './ExampleItem2';

/**
 * Request builder class for operations supported on the [[ExampleItem2]] entity.
 */
export class ExampleItem2RequestBuilder extends RequestBuilder<ExampleItem2> {
  /**
   * Returns a request builder for retrieving one `ExampleItem2` entity based on its keys.
   * @param id Key property. See [[ExampleItem2.id]].
   * @returns A request builder for creating requests to retrieve one `ExampleItem2` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilderV4<ExampleItem2> {
    return new GetByKeyRequestBuilderV4(ExampleItem2, { id });
  }

  /**
   * Returns a request builder for querying all `ExampleItem2` entities.
   * @returns A request builder for creating requests to retrieve all `ExampleItem2` entities.
   */
  getAll(): GetAllRequestBuilderV4<ExampleItem2> {
    return new GetAllRequestBuilderV4(ExampleItem2);
  }

  /**
   * Returns a request builder for creating a `ExampleItem2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExampleItem2`.
   */
  create(entity: ExampleItem2): CreateRequestBuilderV4<ExampleItem2> {
    return new CreateRequestBuilderV4(ExampleItem2, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ExampleItem2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExampleItem2`.
   */
  update(entity: ExampleItem2): UpdateRequestBuilderV4<ExampleItem2> {
    return new UpdateRequestBuilderV4(ExampleItem2, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExampleItem2`.
   * @param id Key property. See [[ExampleItem2.id]].
   * @returns A request builder for creating requests that delete an entity of type `ExampleItem2`.
   */
  delete(id: string): DeleteRequestBuilderV4<ExampleItem2>;

  /**
   * Returns a request builder for deleting an entity of type `ExampleItem2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExampleItem2` by taking the entity as a parameter.
   */
  delete(entity: ExampleItem2): DeleteRequestBuilderV4<ExampleItem2>;

  delete(idOrEntity: any): DeleteRequestBuilderV4<ExampleItem2> {
    return new DeleteRequestBuilderV4(
      ExampleItem2,
      idOrEntity instanceof ExampleItem2 ? idOrEntity : { id: idOrEntity! },
    );
  }
}
