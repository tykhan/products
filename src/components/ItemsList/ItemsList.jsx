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
        .then(response => response.json());

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

  const pinHandler = (product) => {
    const cardToPinId = filteredProducts.indexOf(product);
    const splicedCard = filteredProducts.splice(cardToPinId, 1);

    if (product.id !== pinnedCard) {
      filteredProducts.unshift(...splicedCard);
      dispatch(action.setProducts(filteredProducts))
      dispatch(action.pinProduct(product.id));
      return;
    }
    filteredProducts.push(...splicedCard);
    filteredProducts.sort((a, b) => a.id - b.id);
    dispatch(action.setProducts(filteredProducts));
    dispatch(action.unpinProduct());
  }

  return (isLoading) ? (
    <Loader />
  ) : (
    <div className="products">
      <ul className="products-list">
        {filteredProducts.map(product => (
          <Item key={product.id} product={product} pinHandler={pinHandler} />
        ))}
      </ul>
    </div>
  )
}