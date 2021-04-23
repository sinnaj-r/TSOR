import { ProductType } from '../../../types/Product';
import { createApiSlice } from '../higherOrderReducers/HOOdataReducer';

const {
  slice: productsSlice,
  actions: productActions,
  adapter,
} = createApiSlice<ProductType>('product');

export const {
  get: productGet,
  getById: productGetById,
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
} = adapter.getSelectors(
  (state: { product: ReturnType<typeof productsSlice['reducer']> }) =>
    state.product,
);

export const {
  setFilter: productSetFilter,
  dismissError: productDismissError,
  clear: productClear,
  setAll: productSetAll,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
