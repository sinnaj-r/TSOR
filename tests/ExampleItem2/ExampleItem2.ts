/* eslint-disable import/export */
/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  AllFields,
  CustomFieldV4,
  EntityBuilderType,
  EntityV4,
  Field,
  NumberField,
  StringField,
} from '@sap-cloud-sdk/core';
import { ExampleItem2RequestBuilder } from './ExampleItem2RequestBuilder';

export interface ExampleItem2Type {
  id: string;
  description?: string | null;
  num1?: number | null;
  num2?: number | null;
}

/**
 * This class represents the entity "ExampleItem2" of service "sap.odm".
 */
export class ExampleItem2 extends EntityV4 implements ExampleItem2Type {
  /**
   * Technical entity name for ExampleItem2.
   */
  static _entityName = 'ExampleItem2' as const;

  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';

  /**
   * Id.
   */
  id!: string;

  /**
   * Description.
   * @nullable
   */
  description?: string;

  /**
   * Num 1.
   * @nullable
   */
  num1?: number;

  /**
   * Num 2.
   * @nullable
   */
  num2?: number;

  /**
   * Returns an entity builder to construct instances of `ExampleItem2`.
   * @returns A builder that constructs instances of entity type `ExampleItem2`.
   */
  static builder(): EntityBuilderType<ExampleItem2, ExampleItem2Type> {
    return EntityV4.entityBuilder(ExampleItem2);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExampleItem2` entity type.
   * @returns A `ExampleItem2` request builder.
   */
  static requestBuilder(): ExampleItem2RequestBuilder {
    return new ExampleItem2RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExampleItem2`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExampleItem2`.
   */
  static customField(fieldName: string): CustomFieldV4<ExampleItem2> {
    return EntityV4.customFieldSelector(fieldName, ExampleItem2);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export namespace ExampleItem2 {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ExampleItem2> = new StringField(
    'id',
    ExampleItem2,
    'Edm.String',
  );
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ExampleItem2> = new StringField(
    'description',
    ExampleItem2,
    'Edm.String',
  );
  /**
   * Static representation of the [[num1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_1: NumberField<ExampleItem2> = new NumberField(
    'num1',
    ExampleItem2,
    'Edm.Int32',
  );
  /**
   * Static representation of the [[num2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_2: NumberField<ExampleItem2> = new NumberField(
    'num2',
    ExampleItem2,
    'Edm.Int32',
  );
  /**
   * All fields of the ExampleItem2 entity.
   */
  export const _allFields: Array<
    StringField<ExampleItem2> | NumberField<ExampleItem2>
  > = [
    ExampleItem2.ID,
    ExampleItem2.DESCRIPTION,
    ExampleItem2.NUM_1,
    ExampleItem2.NUM_2,
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExampleItem2> = new AllFields(
    '*',
    ExampleItem2,
  );
  /**
   * All key fields of the ExampleItem2 entity.
   */
  export const _keyFields: Array<Field<ExampleItem2>> = [ExampleItem2.ID];
  /**
   * Mapping of all key field names to the respective static field property ExampleItem2.
   */
  export const _keys: {
    [keys: string]: Field<ExampleItem2>;
  } = ExampleItem2._keyFields.reduce(
    (
      acc: { [keys: string]: Field<ExampleItem2> },
      field: Field<ExampleItem2>,
    ) => {
      acc[field._fieldName] = field;
      return acc;
    },
    {},
  );
}
