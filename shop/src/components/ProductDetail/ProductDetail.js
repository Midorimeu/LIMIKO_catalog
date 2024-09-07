// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ fetchProducts, favorites, setFavorites , addToCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        if (Array.isArray(productsData)) {
          const foundProduct = productsData.find((p) => p.id === parseInt(id));
          if (foundProduct) {
            setProduct(foundProduct);
            setIsFavorite(foundProduct.isFavorite || false);
          } else {
            setError(`Product not found with id: ${id}`);
          }
        } else {
          setError('Products data is not in the expected format');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchProducts, id]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    setFavorites((prevFavorites) => {
      const existingFavoriteIndex = prevFavorites.findIndex((fav) => fav.id === parseInt(id));
      if (existingFavoriteIndex !== -1) {
        const newFavorites = [...prevFavorites];
        newFavorites.splice(existingFavoriteIndex, 1);
        return newFavorites;
      } else {
        const productToAdd = {
          id: parseInt(id),
          isFavorite: !isFavorite,
          name: product.name,
          imageUrl: product.imageUrl,
          price: product.price,
        };
        return [...prevFavorites, productToAdd];
      }
    });
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: parseInt(id),
        name: product.name,
        imageUrl: product.imageUrl,
        size: selectedSize,
        price: product.price,
      });
    } else {
      console.error('Please select a size before adding to cart');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mr-5" style={{ marginRight: '20px' }}>
          <img src={product?.imageUrl} alt={product?.name} />
        </div>
        <div className="col-md-4 mt-5" style={{ marginLeft: '100px', textAlign: 'left'}}>
          <h2>{product?.name}</h2>
          <p className="mt-4" style={{fontSize : '30px'}}>{`$${product?.price}`}</p>
          <p className="mt-4">{`Gender: ${product?.gender}`}</p>
          <div className="mb-3">
            <select
              className="custom-select"
              value={selectedSize}
              onChange={(e) => handleSizeSelection(e.target.value)}
            >
              <option value="" disabled>
                Select your size
              </option>
              {product?.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="btn">
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className={`favorite-btn ${isFavorite ? 'clicked' : ''}`} onClick={handleFavoriteClick}>
              Favorite {isFavorite ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="descriprion mt-2">
          <h3 className="mt-4">Description:</h3>
          <p>{product?.name} - the perfect choice for those who appreciate comfort and fashionable design. The combination of high quality materials, comfortable sole and stylish design make them ideal for everyday wear. Whatever your style, these trainers will emphasise your individual taste and add sophistication to your look. Bring your style to life with these versatile shoes.</p>
          <div className="under-description">
            <div>
              <h4>More about the product</h4>
              <ul>
                <li>black/grey/white</li>
                <li>colour-block design</li>
                <li>perforated toe</li>
                <li>embossed logo on the front</li>
                <li>unclasped</li>
              </ul>
            </div>
            <div style={{paddingLeft : '80px'}}>
            <h4>Composition</h4>
            <p>Outsole: Rubber 100%</p>
            <p>Lining: Calf leather 100%</p>
            <p>Outer Material: Calf Leather 100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
