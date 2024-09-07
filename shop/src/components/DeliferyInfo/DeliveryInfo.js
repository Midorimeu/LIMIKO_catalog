import React from 'react';
import { useState } from 'react';
import './DeliveryInfo.css';

const YourComponent = () => {
  const [isDeliveryInfoVisible, setDeliveryInfoVisible] = useState(false);

  const toggleDeliveryInfo = () => {
    setDeliveryInfoVisible(!isDeliveryInfoVisible);
  };

  return (
    <div className={`delivery-info ${isDeliveryInfoVisible ? 'expanded' : ''}`}>
      <button className="delivery-info-button" onClick={toggleDeliveryInfo} style={{ paddingLeft: '15px' }}>
        About Delivery
        {isDeliveryInfoVisible ? (
          <i className="fa-solid fa-angle-up" style={{ paddingTop: '5px', paddingRight: '10px' }}></i>
        ) : (
          <i className="fa-solid fa-angle-down" style={{ paddingTop: '5px', paddingRight: '10px' }}></i>
        )}
      </button>

      {isDeliveryInfoVisible && (
        <div className="delivery-info-content">
          <p>We provide fast and reliable delivery worldwide. Delivery times may vary depending on your location. Contact us if you have any questions regarding delivery.</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
