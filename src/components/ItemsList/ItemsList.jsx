import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ItemsList.scss';
import { BASE_URL } from '../../api/api';
import { Item } from '../Item/Item';
import * as action from '../../redux/actions';
import { getProducts, getPinnedCard, getQuery, getLoader } from '../../redux/store';
import { Loader } from '../Loader/Loader';

export const ItemsList = () => {
  const products = useSelector(getProducts);
  const query = useSelector(getQuery);
  const pinnedCard = useSelector(getPinnedCard);
  const isLoading = useSelector(getLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.turnOnLoader());
    const fetchProducts = () => async(dispatch) => {
      const products = await fetch(BASE_URL)
        .then(response => {
          return response.json();
        });

      dispatch(action.setProducts(products));
      dispatch(action.turnOffLoader());
    }
    
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products
    .filter(
      item => item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );
  
  if (pinnedCard) {
    filteredProducts.unshift(...filteredProducts.splice(pinnedCard - 1, 1))
  }

  return (isLoading)
    ? <Loader />
    : (<div className="products">
        <ul className="products-list">
          {filteredProducts.map(product => (
            <Item key={product.id} {...product} />
          ))}
        </ul>
      </div>)
  
}