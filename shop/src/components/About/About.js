import React, { Component } from 'react';
import withStoreInfo from './StoreInfo';
import DeliveryInfo from '../DeliferyInfo/DeliveryInfo';

class AboutPage extends Component {
  render() {
    const { storeInfo } = this.props;

    return (
      <div className="container mt-5">
        <div style={{textAlign : 'left'}}>
          <h2>About Page</h2>
          <p style={{fontSize: '20px', paddingTop: '20px'}}>{storeInfo.description}</p>
          <p>Name: {storeInfo.shopName}</p>
          <p>Location: {storeInfo.location}</p>
          <p>Number: {storeInfo.phoneNumber}</p>
          <p>Email: {storeInfo.contactEmail}</p>
        </div>
        <div className='row'>
        <DeliveryInfo/>
        </div>
      </div>
    );
  }
}

export default withStoreInfo(AboutPage);
