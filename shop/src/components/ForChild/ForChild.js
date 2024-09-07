import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './ForChild.css'

const ForChild = ({ fetchProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        if (Array.isArray(productsData)) {
          const filteredProducts = productsData.filter(product => product.gender === "ForChild");
          setProducts(filteredProducts);
        } else {
          console.error('Products data is not in the expected format:', productsData);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [fetchProducts]);

  return (
    <div className="container mt-5 ml-5">
      <div className="title-container">
      <div>
        <h3 className="title-text" style={{ textAlign: 'center', marginTop: '30px' }}>
          Child's Shoes
        </h3>
        <p className="title-text" style={{ textAlign: 'center', marginTop : '20px'}}>Shoes are not only an essential element of the wardrobe, but also a stylish accessory, without which it is impossible to create a spectacular image.</p>
      </div>
      <img style ={{width: '50%', height: 'auto' }} src="https://i.ibb.co.com/KKjqyFq/Mango-Kids-P-buty-zamszowe-dzieci-ce-DESERT.jpg" alt="Product" className="title-image" />
    </div>
      <h3 style={{textAlign :'left' , marginTop :'50px'}}>Best on Sale</h3>
      <div className="row mt-4" style={{borderTop : '0.8px solid #ccc'}}>
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 mb-4 mt-5">
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForChild;