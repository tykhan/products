import { TURN_ON_LOADER, TURN_OFF_LOADER } from '../actions';

export const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case TURN_ON_LOADER:
      return true;
    
    case TURN_OFF_LOADER:
      return false;
  
    default:
      return state;
  }
}
