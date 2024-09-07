import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import sliderData from '../Data/SliderData';
import ForHim from '../ForHIm/ForHim';
import ForHer from '../ForHer/ForHer';
import ForChild from '../ForChild/ForChild';
import ProductDetail from '../ProductDetail/ProductDetail';
import fetchProducts from '../Data/ProductData';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';
import Cart from '../Card/Cart';
import AboutPage from '../About/About';
import Product from '../Product/Product';


function App() {
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [productsForHim, setProductsForHim] = useState([]);
  const [productsForHer, setProductsForHer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProductsForHim(data.filter(product => product.gender === 'ForHim'));
      setProductsForHer(data.filter(product => product.gender === 'ForHer'));
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='content'>

        <Routes>
            <Route
              path="/for-child"
              element={<ForChild fetchProducts={fetchProducts} />}
            />
          </Routes>
          
          <Routes>
            <Route
              path="/for-him"
              element={<ForHim fetchProducts={fetchProducts} />}
            />
          </Routes>

          <Routes>
            <Route
              path="/for-her"
              element={<ForHer fetchProducts={fetchProducts} />}
            />
          </Routes>


          <Routes>
            <Route
              path="/product/:id"
              element={<ProductDetail fetchProducts={fetchProducts} favorites={favorites} setFavorites={setFavorites} addToCart={addToCart} />}
            />
          </Routes>

          <Routes>
            <Route
              exact path="/"
              element={
                <div>
                  <Carousel images={sliderData} />

                  <div className="gender-products">
                    <h2>Shoes for Him</h2>
                    <div className="row product-list">
                      {productsForHim.slice(0, 4).map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-6 mb-4 mt-5">
                          <Product {...product} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Кроссовки для нее */}
                  <div className="gender-products">
                    <h2>Shoes for Her</h2>
                    <div className="row product-list">
                      {productsForHer.slice(0, 4).map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-6 mb-4 mt-5">
                          <Product {...product} />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              }
            />
          </Routes>

          <Routes>
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <Routes>
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}
            />
          </Routes>

          <Routes>
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;