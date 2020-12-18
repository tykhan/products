import { combineReducers } from 'redux';

import { productsReducer } from '../reducers/productsReducer';
import { searchQueryReducer } from '../reducers/searchQueryReducer';
import { pinCardReducer } from '../reducers/pinCardReducer';
import { loaderReducer } from './LoaderReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  searchQuery: searchQueryReducer,
  pinedCard: pinCardReducer,
  isLoading: loaderReducer,
});
