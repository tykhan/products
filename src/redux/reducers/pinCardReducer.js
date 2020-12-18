import { PIN_PRODUCT, UNPIN_PRODUCT } from '../actions'

export const pinCardReducer = (state = null, action) => {
  switch (action.type) {
    case PIN_PRODUCT:
      return action.payload;
    
    case UNPIN_PRODUCT:
      return null;
  
    default:
      return state;
  }
}
