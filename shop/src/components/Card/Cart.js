import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart}) => {
  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce((total, item) => total + item.price, 0);
    return itemsTotal;
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: 'left' }}> Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="row mt-5">
          <div className="col-md-6 col-sm-3">
            <p style={{ paddingLeft : '150px', fontSize: '24px', paddingTop : '50px'}}>You don't have any items in your cart yet.</p>
          </div>
          <div className="col-md-6 col-sm-3">
            <div className="right-block">
              <h2>Amount</h2>
              <p className="label">Items: <span className="value">${calculateTotal()}</span></p>
              <p className="label">Delivery: <span className="value">$10</span></p>
              <hr />
              <p className="label">Total: <span className="value">USD${calculateTotal() + 10}</span></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-5">
          <div className="col-md-6 col-sm-3">
            <table className="table table-borderless">
              <thead></thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.imageUrl && (
                        <img src={item.imageUrl} alt={`Product ID: ${item.id}`} style={{ maxWidth: '50px' }} />
                      )}
                    </td>
                    <td>{item.name}</td>
                    <td>{`Size: ${item.size}`}</td>
                    <td>{`Price: $${item.price}`}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-danger" style={{ width: '30px', paddingLeft: '8px' }}>
                      <i class="fa-solid fa-x"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6 col-sm-3">
            <div className="right-block">
              <h2>Amount</h2>
              <p className="label">Items: <span className="value">${calculateTotal()}</span></p>
              <p className="label">Delivery: <span className="value">$10</span></p>
              <hr />
              <p className="label">Total: <span className="value">USD${calculateTotal() + 10}</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;