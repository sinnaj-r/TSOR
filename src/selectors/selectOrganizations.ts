import { createSelector } from 'reselect';
import { buPaSelectAll } from '../features/bupa';

export const selectOrganizations = createSelector(buPaSelectAll, (bupas) =>
  bupas.filter((elm) => elm.businessPartnerType === 'organization'),
);
