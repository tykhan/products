import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './NewItemForm.scss';
import { addNewCardAction } from '../../redux/actions';

export const NewItemForm = () => {
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const priceHandler = (event) => {
    const value = event.target.value;
    const requredSymb = '1234567890,. ';

    if (!requredSymb.split('').includes(value[value.length - 1])) {
      return;
    }
    setPrice(value);
  }

  const addNewCard = (event) => {
    event.preventDefault();
    const { title, description, price, image } = { ...event.target.elements };
    dispatch(addNewCardAction(title.value, description.value, price.value, image.value));

    setPrice('');
    event.target.reset();
  }

  return (
    <form
      method="post"
      className="item-form form"
      onSubmit={addNewCard}
    >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          maxLength="50"
          autoComplete="off"
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Product title"
          required
        />
        <label htmlFor="price" className="form-label">Price</label>
        <input
          autoComplete="off"
          placeholder="e.g 150.90"
          type="text"
          name="price"
          id="price"
          className="form-control"
          maxLength="7"
          required
          onChange={priceHandler}
          value={price}
        />
        <label htmlFor="image" className="form-label">Image</label>
        <input
          autoComplete="off"
          placeholder="Put link to image"
          type="text"
          name="image"
          id="image"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control form__description"
          id="description"
          name="description"
          rows="3"
          placeholder="Product description"
          maxLength="150"
          required
        />
      </div>
      
      <button
        type="submit"
        className="form-btn btn btn-outline-success"
      >
        Add new product
      </button>
    </form>
  )
}
