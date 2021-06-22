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
import { ExampleItem1RequestBuilder } from './ExampleItem1RequestBuilder';

export interface ExampleItem1Type {
  id: string;
  description?: string | null;
  num1?: number | null;
  num2?: number | null;
}

/**
 * This class represents the entity "ExampleItem1" of service "sap.odm".
 */
export class ExampleItem1 extends EntityV4 implements ExampleItem1Type {
  /**
   * Technical entity name for ExampleItem1.
   */
  static _entityName = 'ExampleItem1' as const;

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
   * Returns an entity builder to construct instances of `ExampleItem1`.
   * @returns A builder that constructs instances of entity type `ExampleItem1`.
   */
  static builder(): EntityBuilderType<ExampleItem1, ExampleItem1Type> {
    return EntityV4.entityBuilder(ExampleItem1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExampleItem1` entity type.
   * @returns A `ExampleItem1` request builder.
   */
  static requestBuilder(): ExampleItem1RequestBuilder {
    return new ExampleItem1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExampleItem1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExampleItem1`.
   */
  static customField(fieldName: string): CustomFieldV4<ExampleItem1> {
    return EntityV4.customFieldSelector(fieldName, ExampleItem1);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export namespace ExampleItem1 {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ExampleItem1> = new StringField(
    'id',
    ExampleItem1,
    'Edm.String',
  );
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ExampleItem1> = new StringField(
    'description',
    ExampleItem1,
    'Edm.String',
  );
  /**
   * Static representation of the [[num1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_1: NumberField<ExampleItem1> = new NumberField(
    'num1',
    ExampleItem1,
    'Edm.Int32',
  );
  /**
   * Static representation of the [[num2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_2: NumberField<ExampleItem1> = new NumberField(
    'num2',
    ExampleItem1,
    'Edm.Int32',
  );
  /**
   * All fields of the ExampleItem1 entity.
   */
  export const _allFields: Array<
    StringField<ExampleItem1> | NumberField<ExampleItem1>
  > = [
    ExampleItem1.ID,
    ExampleItem1.DESCRIPTION,
    ExampleItem1.NUM_1,
    ExampleItem1.NUM_2,
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExampleItem1> = new AllFields(
    '*',
    ExampleItem1,
  );
  /**
   * All key fields of the ExampleItem1 entity.
   */
  export const _keyFields: Array<Field<ExampleItem1>> = [ExampleItem1.ID];
  /**
   * Mapping of all key field names to the respective static field property ExampleItem1.
   */
  export const _keys: {
    [keys: string]: Field<ExampleItem1>;
  } = ExampleItem1._keyFields.reduce(
    (
      acc: { [keys: string]: Field<ExampleItem1> },
      field: Field<ExampleItem1>,
    ) => {
      acc[field._fieldName] = field;
      return acc;
    },
    {},
  );
}
