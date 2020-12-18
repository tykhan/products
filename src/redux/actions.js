export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const PIN_PRODUCT = 'PIN_PRODUCT';
export const UNPIN_PRODUCT = 'UNPIN_PRODUCT';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const TURN_ON_LOADER = 'TURN_ON_LOADER';
export const TURN_OFF_LOADER = 'TURN_OFF_LOADER';


export const turnOnLoader = () => ({
  type: TURN_ON_LOADER
});

export const turnOffLoader = () => ({
  type: TURN_OFF_LOADER
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const pinProduct = (id) => ({
  type: PIN_PRODUCT,
  payload: id,
});

export const unpinProduct = () => ({
  type: UNPIN_PRODUCT,
})

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const searchByQuery = (letter) => ({
  type: SEARCH_QUERY,
  payload: letter,
});

export const addNewCardAction = (title, description, price, image) => ({
  type: ADD_NEW_CARD,
  payload: {
    title,
    description,
    price,
    image
  }
});

export const pinCardAction = (id) => ({
  type: PIN_PRODUCT,
  payload: id,
});

export const unpinCardAction = () => ({
  type: UNPIN_PRODUCT,
})
