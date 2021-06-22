import {
  Constructable,
  StringField,
} from '../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../cloud-sdk-js/packages/core/dist/odata-v4';

export type IDObject = Entity & {
  id: string;
};

export type IDConstructable<T extends IDObject> = Constructable<T> & {
  ID: StringField<any>;
};
