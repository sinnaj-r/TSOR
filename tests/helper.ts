import { expect } from 'chai';
import { SLICE1_TYPE, SLICE2_TYPE, STORE_TYPE } from './TestTypes';

export const createApplySelector =
  (store: STORE_TYPE, slice1: SLICE1_TYPE, slice2: SLICE2_TYPE) =>
  (
    selectorName: keyof typeof slice1['_selectors'],
    id?: string,
    sliceId = 1,
  ) => {
    let slice;
    if (sliceId === 1) {
      slice = slice1;
    } else {
      slice = slice2;
    }
    const selector = slice.getSelectors()[selectorName];
    const state = store.getState();
    return selector(state, id!);
  };

export const expectRequestedUrlToInclude = (interceptor: any, str: string) =>
  new Promise((res, rej) => {
    const listener = (req: any) => {
      expect(decodeURIComponent(req.path)).to.include(str);
      interceptor.removeListener('request', listener);
      res(true);
    };
    interceptor.addListener('request', listener);
    setTimeout(() => {
      interceptor.removeListener('request', listener);
      rej(new Error('Timeout exceeded'));
    }, 500);
  });
