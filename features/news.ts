import { NewsItemType } from '../../../types/NewsItem';
import { createApiSlice } from '../higherOrderReducers/HOOdataReducer';

const {
  slice: newsSlice,
  actions: newsActions,
  adapter,
} = createApiSlice<NewsItemType>('news');

export const {
  get: newsGet,
  getById: newsGetById,
  post: newsPost,
  patch: newsPatch,
  deleteById: newsDeleteById,
} = newsActions;

export const {
  selectIds: newsSelectIds,
  selectEntities: newsSelectEntities,
  selectAll: newsSelectAll,
  selectTotal: newsSelectTotal,
  selectById: newsSelectById,
} = adapter.getSelectors(
  (state: { news: ReturnType<typeof newsSlice['reducer']> }) => state.news,
);

export const {
  setFilter: newsSetFilter,
  dismissError: newsDismissError,
  clear: newsClear,
  setAll: newsSetAll,
} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
