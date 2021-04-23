import { combineReducers } from 'redux';
import { opportunityReducer } from './features/opportunity';
import { newsReducer } from './features/news';
import { buPasReducer } from './features/bupa';
import { productsReducer } from './features/products';
import { settingsReducer } from './features/settings';

export default combineReducers({
  product: productsReducer,
  settings: settingsReducer,
  buPa: buPasReducer,
  news: newsReducer,
  opportunity: opportunityReducer,
});
