import { createApiSlice } from '../higherOrderReducers/HOOdataReducer';
import { RootState } from '../store';

export type Product = {
  id: string;
  name: string;
};

const {
  slice: productsSlice,
  actions: productActions,
  adapter,
} = createApiSlice<Product>('product');

export const {
  get: productGet,
  getById: productgetById,
  post: productPost,
  patch: productPatch,
  deleteById: productDeleteById,
} = productActions;

export const {
  selectIds: productSelectIds,
  selectEntities: productSelectEntities,
  selectAll: productSelectAll,
  selectTotal: productSelectTotal,
  selectById: productSelectById,
} = adapter.getSelectors((state: RootState) => state.product);

export const {
  setFilter: productSetFilter,
  dismissError: productDismissError,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
