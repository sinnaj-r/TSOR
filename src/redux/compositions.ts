import { normalize, schema } from 'normalizr';
import { Dispatch } from 'redux';
import { IDObject } from '../types/IDObject';

export type CompositionMapType = Record<string, schema.Entity>;

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
  K extends string,
  D extends Dispatch,
>(
  dispatch: D,
  items: T[],
  apiName: K,
  compositionMap: CompositionMapType,
) => {
  const normalizedData = normalize(
    items,
    new schema.Array(
      compositionMap[apiName],
      (value: any, parent: any, key: string) => {
        console.log(value, parent, key);
        return key;
      },
    ),
  );
  for (const [key, value] of Object.entries(normalizedData.entities)) {
    dispatch({
      type: `${key}/upsertMany`,
      payload: value,
    });
  }
  return Object.values(normalizedData.entities[apiName] ?? {}) as T[];
};
