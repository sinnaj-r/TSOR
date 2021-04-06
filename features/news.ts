import { createApiSlice } from '../higherOrderReducers/HOOdataReducer';

export type NewsItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  pubDate: string;
  source: string;
};

const {
  slice: newsSlice,
  actions: newsActions,
  adapter,
} = createApiSlice<NewsItem>('news');

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
