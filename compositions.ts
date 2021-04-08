import { produce, current } from 'immer';
import objectPath from 'object-path';
import type { RootDispatch } from './store';

import type { IDObject } from './higherOrderReducers/HOOdataReducer';
import { RouteKeyType } from './ROUTES';

export type CompositionMapType = {
  [key: string]: [{ path: string; apiName: RouteKeyType }];
};

export const CompositionMap: CompositionMapType = {
  buPa: [
    {
      path: 'customerInformation.salesOpportunities',
      apiName: 'opportunity',
    },
  ],
};
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
export const resolveComposition = <T extends IDObject>(
  dispatch: RootDispatch,
  items: T[],
  apiName: RouteKeyType,
) => {
  const changedItems = produce(items, (draft) => {
    for (const composition of CompositionMap[apiName] || []) {
      // eslint-disable-next-line no-debugger
      const compositionItems: T[] = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < draft.length; i++) {
        const item = draft[i];
        const compositionItem = objectPath.get(item, composition.path);
        if (!compositionItem) {
          continue;
        }
        if (Array.isArray(current(compositionItem))) {
          compositionItems.push(...current(compositionItem));
          objectPath.set(
            item,
            composition.path,
            compositionItem.map((elm: any) => elm.id),
          );
        } else {
          compositionItems.push(current(compositionItem));
          objectPath.set(item, composition.path, compositionItem.id);
        }
      }
      dispatch({
        type: `${composition.apiName}/setAll`,
        payload: compositionItems,
      });
    }
  });
  return changedItems;
};
