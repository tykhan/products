import React from 'react';

import './Header.scss'
import { useDispatch } from 'react-redux';
import { searchByQuery } from '../../redux/actions';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar navbar-light bg-light">
      <div className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => dispatch(searchByQuery(e.target.value))}
        />
      </div>
    </div>
  )
}