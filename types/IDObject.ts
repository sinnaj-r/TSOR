import { Constructable, StringField } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';

export type IDObject = Entity & {
  id: string;
};

export type IDConstructable<T extends IDObject> = Constructable<T> & {
  ID: StringField<any>;
};
