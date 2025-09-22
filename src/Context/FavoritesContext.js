import React, { createContext, useContext, useState } from 'react';

// Create Favorites Context
const FavoritesContext = createContext();

// Favorites Provider Component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Add product to favorites
  const addToFavorites = (product) => {
    const existingFavorite = favorites.find(item => item.id === product.id);
    if (!existingFavorite) {
      setFavorites([...favorites, product]);
      console.log('Added to favorites:', product.name);
    }
  };

  // Remove product from favorites
  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId));
    console.log('Removed from favorites:', productId);
  };

  // Toggle favorite status
  const toggleFavorite = (product) => {
    const isCurrentlyFavorite = favorites.some(item => item.id === product.id);
    
    if (isCurrentlyFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  // Check if product is favorite
  const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId);
  };

  // Get favorites count
  const getFavoritesCount = () => {
    return favorites.length;
  };

  const contextValue = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoritesCount,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use favorites context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};