import { Dispatch } from 'redux';
import { IDObject } from '../../types/IDObject';

export type CompositionType = {
  to: string;
  isCollection: boolean;
};

// TODO Better Typing
export type CompositionMapType = {
  compositions: { [name: string]: { [key: string]: CompositionType } };
  apiNames: {
    [typeName: string]: string;
  };
};

export type UsedComposition = {
  path: string;
  to: string;
};

const traverseCompositions = (
  path: string,
  compositionMap: CompositionMapType,
  typeName: string,
) => {
  let usedCompositions: UsedComposition[] = [];
  for (const [prop, composition] of Object.entries(
    compositionMap.compositions[typeName],
  )) {
    if (compositionMap.apiNames[composition.to]) {
      // TODO What about arrays ?
      usedCompositions.push({
        path: `${path}${path ? '.' : ''}${prop}`,
        to: composition.to,
      });
    } else {
      usedCompositions = [
        ...usedCompositions,
        // eslint-disable-next-line unused-imports/no-unused-vars
        ...traverseCompositions(
          `${path}${path ? '.' : ''}${prop}`,
          compositionMap,
          composition.to,
        ),
      ];
    }
  }
  return usedCompositions;
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
export const resolveComposition = <
  T extends IDObject,
  K extends string,
  D extends Dispatch
>(
  dispatch: D,
  items: T[],
  _apiName: K,
  _compositionMap: CompositionMapType,
) => items;
// TODO Re-Implement Composition (with normalizr)
/*
  const changedItems = produce(items, (draft) => {
    const typeName = Object.entries(compositionMap.apiNames).find(
      ([_, name]) => apiName === name,
    )?.[0];
    if (!typeName) {
      throw new Error('TODO');
    }
    const usefulCompositions = traverseCompositions(
      '',
      compositionMap,
      typeName,
    );
    for (const { path, to } of usefulCompositions) {
      const compositionItems: T[] = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < draft.length; i++) {
        const item = draft[i];
        const compositionItem = objectPath.get(item, path);
        if (!compositionItem) {
          continue;
        }
        if (Array.isArray(current(compositionItem))) {
          compositionItems.push(...current(compositionItem));
          objectPath.set(
            item,
            path,
            compositionItem.map((elm: any) => elm.id),
          );
        } else {
          compositionItems.push(current(compositionItem));
          objectPath.set(item, path, compositionItem.id);
        }
      }
      dispatch({
        type: `${compositionMap.apiNames[to]}/upsertMany`,
        payload: compositionItems,
      });
    }
  });
  return changedItems;
  */
