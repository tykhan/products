import { SET_PRODUCTS, DELETE_PRODUCT, ADD_NEW_CARD } from '../actions';

export const productsReducer = (state = [], action) => {
  switch (action.type) {

    case SET_PRODUCTS:
      return [...action.payload];

    case DELETE_PRODUCT:
      return state.filter(item => item.id !== action.payload);

    case ADD_NEW_CARD:
      return [...state, {
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          image: action.payload.image,
          id: state.length + 1,
        }]

    default:
      return state;
  }
}
