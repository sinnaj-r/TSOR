import { createSelector } from 'reselect';
import { productSelectAll } from '../features/products';

export const select3Products = createSelector(productSelectAll, (products) =>
  products.slice(0, 3),
);
