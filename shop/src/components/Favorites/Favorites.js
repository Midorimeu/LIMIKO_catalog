import React from 'react';
import './Favorites.css';
import Product from '../Product/Product';

const Favorites = ({ favorites }) => {
  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: 'left' }}>Favorite Products</h3>
      <div className="row mt-5">
        {favorites.length === 0 ? (
          <p style={{ paddingLeft : '400px', fontSize: '24px', paddingTop : '150px'}}>You have no favorite products yet.</p>
        ) : (
          <div className="col-md-12 col-sm-6">
            <div className="row">
              {favorites.map((fav) => (
                <div key={fav.id} className="col-md-4 col-sm-6 mb-4">
                  <Product
                    id={fav.id}
                    name={fav.name}
                    price={fav.price || 'Price not available'}
                    imageUrl={fav.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;