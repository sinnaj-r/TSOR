import { normalize } from 'normalizr';
import { Dispatch } from 'redux';
import { createSchema } from '@epicbp2020/cloud-sdk-normalizr';
import { Constructable } from '@sap-cloud-sdk/core/dist';
import { IDObject } from '../types/IDObject';

// TODO: I should remember my calls to createSchema, as they are quite expensive!

/**
 * Resolve all compositions for a route.
 *
 * E.g. a BuPa has Opportunities and the Opportunities are separate entities, in a different store slice.
 *
 * @template T  The Type of the Route (e.g. BuPa, ...); For convenience we use this this as the type of the composition too. (Which is incorrect)
 * @param state The current Redux State
 * @param items The Items from which the compositions should be extracted.
 * @param apiName
 */
export const resolveComposition = <
  T extends IDObject,
  // eslint-disable-next-line unused-imports/no-unused-vars
  K extends string,
  D extends Dispatch,
>(
  dispatch: D,
  items: T[],
  constructable: Constructable<T>,
  entities: string[],
) => {
  const schema = createSchema(constructable, entities);
  const normalizedData = normalize(items, schema);
  for (const [key, value] of Object.entries(normalizedData.entities)) {
    dispatch({
      type: `${key}/upsertMany`,
      payload: value,
    });
  }
  return Object.values(
    // eslint-disable-next-line no-underscore-dangle
    normalizedData.entities[constructable._entityName] ?? {},
  ) as T[];
};
