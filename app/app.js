import React, { useState } from 'react';
import ProductScreen from './src/screens/ProductScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

const App = () => {
  // State to track which screen to display
  const [currentScreen, setCurrentScreen] = useState('HomeScreen');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Functions to change the screen
  const goToProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentScreen('ProductDetailScreen');
  };

  const goToCart = () => {
    setCurrentScreen('CartScreen');
  };

  const goToProducts = () => {
    setSelectedProduct(null);
    setCurrentScreen('ProductScreen');
  };
  const goToHomeScreen=()=>{
    setCurrentScreen('HomeScreen');
  }

  return (
    <>
      {currentScreen === 'HomeScreen' && (
        <HomeScreen onGoShopping={goToProducts} />
      )}
      {currentScreen === 'ProductScreen' && (
        <ProductScreen 
          onProductPress={goToProductDetail} 
          onGoToCart={goToCart} 
          onGoHome={goToHomeScreen} 
        />
      )}
      {currentScreen === 'ProductDetailScreen' && (
        <ProductDetailScreen product={selectedProduct} onGoBack={goToProducts} />
      )}
      {currentScreen === 'CartScreen' && (
        <CartScreen onGoBack={goToProducts} />
      )}
    </>
  );
};

export default App;
