// App.js
import React from 'react';
import { StackNavigation } from './src/Navigation/StackNavigation.jsx';
import { CartProvider } from './src/Context/CartContext.js';
import { FavoritesProvider } from './src/Context/FavoritesContext.js'; // Import FavoritesProvider

const App = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <StackNavigation />
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;