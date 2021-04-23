import { BusinessPartnerType } from '../../../types/BusinessPartner';
import { createApiSlice } from '../higherOrderReducers/HOOdataReducer';

const {
  slice: buPasSlice,
  actions: buPaActions,
  adapter,
} = createApiSlice<BusinessPartnerType>('buPa');

export const {
  get: buPaGet,
  getById: buPaGetById,
  post: buPaPost,
  patch: buPaPatch,
  deleteById: buPaDeleteById,
} = buPaActions;

export const {
  selectIds: buPaSelectIds,
  selectEntities: buPaSelectEntities,
  selectAll: buPaSelectAll,
  selectTotal: buPaSelectTotal,
  selectById: buPaSelectById,
} = adapter.getSelectors(
  (state: { buPa: ReturnType<typeof buPasSlice['reducer']> }) => state.buPa,
);

export const {
  setFilter: buPaSetFilter,
  dismissError: buPaDismissError,
  clear: buPaClear,
  setAll: buPaSetAll,
} = buPasSlice.actions;

export const buPasReducer = buPasSlice.reducer;
