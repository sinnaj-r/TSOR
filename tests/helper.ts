import { SLICE1_TYPE, SLICE2_TYPE, STORE_TYPE } from './TestTypes';

export const createApplySelector = (
  store: STORE_TYPE,
  slice1: SLICE1_TYPE,
  slice2: SLICE2_TYPE,
) => (
  selectorName: keyof typeof slice1['selectors'],
  id?: string,
  sliceId = 1,
) => {
  let slice;
  if (sliceId === 1) {
    slice = slice1;
  } else {
    slice = slice2;
  }
  const selector = slice.selectors[selectorName];
  const state = store.getState();
  return selector(state, id!);
};
