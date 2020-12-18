import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const getProducts = () => store.getState().products;
export const getPinnedCard = () => store.getState().pinedCard;
export const getQuery = () => store.getState().searchQuery;
export const getLoader = () => store.getState().isLoading;

store.subscribe(() => {
  console.log(store.getState());
});
