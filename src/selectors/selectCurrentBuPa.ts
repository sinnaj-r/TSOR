import { createSelector } from 'reselect';
import { RootState } from '../store';
import { buPaSelectById } from '../features/bupa';

export const selectCurrentBuPa = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.settings,
  (state, settings) => buPaSelectById(state, settings.currentCustomer),
);
