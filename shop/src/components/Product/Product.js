import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ id, name, price, imageUrl}) => {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <div className="col-md-3 mb-4" style={{ marginBottom: '-10px' }}>
        <div className="card">
          {imageUrl && <img src={imageUrl} className="card-img-top" alt={name} />}
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${`${price}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;