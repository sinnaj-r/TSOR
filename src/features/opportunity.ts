import { CustomerOpportunityType } from '../../../types/CustomerOpportunity';
// eslint-disable-next-line import/no-cycle
import { createApiSlice } from '../higherOrderReducers/HOOdataReducer';

const {
  slice: opportunitySlice,
  actions: opportunityActions,
  adapter,
} = createApiSlice<CustomerOpportunityType>('opportunity');

export const {
  get: opportunityGet,
  getById: opportunityGetById,
  post: opportunityPost,
  patch: opportunityPatch,
  deleteById: opportunityDeleteById,
} = opportunityActions;

export const {
  selectIds: opportunitySelectIds,
  selectEntities: opportunitySelectEntities,
  selectAll: opportunitySelectAll,
  selectTotal: opportunitySelectTotal,
  selectById: opportunitySelectById,
} = adapter.getSelectors(
  (state: { opportunity: ReturnType<typeof opportunitySlice['reducer']> }) =>
    state.opportunity,
);

export const {
  setFilter: opportunitySetFilter,
  dismissError: opportunityDismissError,
  clear: opportunityClear,
  setAll: opportunitySetAll,
} = opportunitySlice.actions;

export const opportunityReducer = opportunitySlice.reducer;
