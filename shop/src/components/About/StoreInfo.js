import React, { Component } from 'react';

const withStoreInfo = (WrappedComponent) => {
  return class extends Component {
    state = {
      storeInfo: {},
    };

    componentDidMount() {
      fetch('https://66dc8d9647d749b72acbe57c.mockapi.io/shop-info/info') 
        .then(response => response.json())
        .then(data => {
          this.setState({ storeInfo: data[0] });
          console.log('Компонент "AboutPage" смонтирован.');
          console.log('Информация о магазине:', data[0]);
        })
        .catch(error => {
          console.error('Ошибка получения данных из mockapi:', error);
        });
    }

    render() {
      const { storeInfo } = this.state;
      return <WrappedComponent storeInfo={storeInfo} {...this.props} />;
    }
  };
};

export default withStoreInfo;
