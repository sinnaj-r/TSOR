import objectPath from 'object-path';
import { produce } from 'immer';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { IDObject } from '../higherOrderReducers/HOOdataReducer';
import { CompositionMap } from '../compositions';
import { selectCurrentBuPa } from './selectCurrentBuPa';
import { RootState } from '../store';

export const selectCurrentBuPaFull = createSelector(
  (state: RootState) => state,
  (state) => {
    const buPa = selectCurrentBuPa(state);
    if (!buPa) {
      return buPa;
    }
    return produce(buPa, (draft) => {
      for (const composition of CompositionMap.buPa) {
        let ids = objectPath.get(draft, composition.path);
        if (!ids) {
          return;
        }
        if (!Array.isArray(ids)) {
          ids = [ids];
        }
        const composedData = createEntityAdapter<IDObject>()
          .getSelectors((st: RootState) => st[composition.apiName])
          .selectAll(state)
          .filter((elm) => (Array.isArray(ids) ? ids : [ids]).includes(elm.id));
        objectPath.del(draft, composition.path);
        objectPath.set(
          draft,
          composition.path,
          Array.isArray(ids) ? composedData : composedData[0],
        );
      }
    });
  },
);
