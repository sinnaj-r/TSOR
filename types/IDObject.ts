import {
  Constructable,
  StringField,
} from '../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../cloud-sdk-js/packages/core/dist/odata-v4';

export type IDObject<P extends Entity = Entity> = Constructable<P> & {
  ID: StringField<any>;
};
