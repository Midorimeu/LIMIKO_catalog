import React from 'react';
import Product from '../Product/Product';

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;