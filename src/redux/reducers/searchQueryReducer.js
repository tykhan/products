import { SEARCH_QUERY } from '../actions';

export const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return action.payload;
  
    default:
      return state;
  }
}