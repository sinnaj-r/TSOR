/* eslint-disable no-redeclare */
/* eslint-disable global-require */
/* eslint-disable import/export */
/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
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
  OneToOneLink,
  RequestBuilder,
  StringField,
} from '@sap-cloud-sdk/core';
import type {
  ExampleItem1,
  ExampleItem1Type,
} from '../ExampleItem1/ExampleItem1';

export interface ExampleItem2Type {
  id: string;
  description?: string;
  num1?: number;
  num2?: number;
  extraField?: string;
  parent?: ExampleItem1Type | null;
}

/**
 * This class represents the entity "ExampleItem2" of service "sap.odm".
 */
export class ExampleItem2 extends EntityV4 implements ExampleItem2Type {
  /**
   * Technical entity name for ExampleItem2.
   */
  static readonly _entityName = 'ExampleItem2';

  /**
   * Default url path for the according service.
   */
  static readonly _defaultServicePath = '/tsor.example';

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
   * Extra Field.
   * @nullable
   */
  extraField?: string;

  /**
   * One-to-one navigation property to the [[ExampleItem1]] entity.
   */
  parent?: ExampleItem1 | null;

  /**
   * Returns an entity builder to construct instances of `ExampleItem2`.
   * @returns A builder that constructs instances of entity type `ExampleItem2`.
   */
  static builder(): EntityBuilderType<ExampleItem2, ExampleItem2Type> {
    return EntityV4.entityBuilder(ExampleItem2);
  }

  static requestBuilder(): RequestBuilder<ExampleItem2> {
    throw new Error('RequestBuilder was not generated!');
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
   * Static representation of the [[extraField]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTRA_FIELD: StringField<ExampleItem2> = new StringField(
    'extraField',
    ExampleItem2,
    'Edm.String',
  );
  /**
   * Static representation of the one-to-one navigation property [[parent]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT: OneToOneLink<ExampleItem2, ExampleItem1> =
    new OneToOneLink(
      'parent',
      ExampleItem2,
      require('../ExampleItem1/ExampleItem1').ExampleItem1,
    );
  /**
   * All fields of the ExampleItem2 entity.
   */
  export const _allFields: Array<
    | StringField<ExampleItem2>
    | NumberField<ExampleItem2>
    | OneToOneLink<ExampleItem2, ExampleItem1>
  > = [
    ExampleItem2.ID,
    ExampleItem2.DESCRIPTION,
    ExampleItem2.NUM_1,
    ExampleItem2.NUM_2,
    ExampleItem2.EXTRA_FIELD,
    ExampleItem2.PARENT,
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
  export const _keys: { [keys: string]: Field<ExampleItem2> } =
    ExampleItem2._keyFields.reduce(
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
