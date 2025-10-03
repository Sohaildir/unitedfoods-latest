// // CartContext.js
// import React, { createContext, useContext, useReducer } from 'react';

// // Initial state
// const initialState = {
//   cartItems: [],
//   totalQuantity: 0,
//   totalPrice: 0,
// };

// // Action types
// const CART_ACTIONS = {
//   ADD_ITEM: 'ADD_ITEM',
//   INCREMENT_ITEM: 'INCREMENT_ITEM',
//   DECREMENT_ITEM: 'DECREMENT_ITEM',
//   REMOVE_ITEM: 'REMOVE_ITEM',
//   CLEAR_CART: 'CLEAR_CART',
// };

// // Reducer function
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case CART_ACTIONS.ADD_ITEM: {
//       const { product } = action.payload;
//       const existingItem = state.cartItems.find(item => item.id === product.id);
      
//       if (existingItem) {
//         // Item already exists, increment quantity
//         const updatedItems = state.cartItems.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
        
//         return {
//           ...state,
//           cartItems: updatedItems,
//           totalQuantity: state.totalQuantity + 1,
//           totalPrice: state.totalPrice + parseFloat(product.price.replace('£', '')),
//         };
//       } else {
//         // Add new item to cart
//         const newItem = {
//           ...product,
//           quantity: 1,
//           price: parseFloat(product.price.replace('£', '')),
//         };
        
//         return {
//           ...state,
//           cartItems: [...state.cartItems, newItem],
//           totalQuantity: state.totalQuantity + 1,
//           totalPrice: state.totalPrice + newItem.price,
//         };
//       }
//     }
    
//     case CART_ACTIONS.INCREMENT_ITEM: {
//       const { productId } = action.payload;
//       const updatedItems = state.cartItems.map(item =>
//         item.id === productId 
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
      
//       const item = state.cartItems.find(item => item.id === productId);
      
//       return {
//         ...state,
//         cartItems: updatedItems,
//         totalQuantity: state.totalQuantity + 1,
//         totalPrice: state.totalPrice + item.price,
//       };
//     }
    
//     case CART_ACTIONS.DECREMENT_ITEM: {
//       const { productId } = action.payload;
//       const item = state.cartItems.find(item => item.id === productId);
      
//       if (item.quantity === 1) {
//         // Remove item if quantity becomes 0
//         const updatedItems = state.cartItems.filter(item => item.id !== productId);
        
//         return {
//           ...state,
//           cartItems: updatedItems,
//           totalQuantity: state.totalQuantity - 1,
//           totalPrice: state.totalPrice - item.price,
//         };
//       } else {
//         const updatedItems = state.cartItems.map(item =>
//           item.id === productId 
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         );
        
//         return {
//           ...state,
//           cartItems: updatedItems,
//           totalQuantity: state.totalQuantity - 1,
//           totalPrice: state.totalPrice - item.price,
//         };
//       }
//     }
    
//     case CART_ACTIONS.REMOVE_ITEM: {
//       const { productId } = action.payload;
//       const item = state.cartItems.find(item => item.id === productId);
//       const updatedItems = state.cartItems.filter(item => item.id !== productId);
      
//       return {
//         ...state,
//         cartItems: updatedItems,
//         totalQuantity: state.totalQuantity - item.quantity,
//         totalPrice: state.totalPrice - (item.price * item.quantity),
//       };
//     }
    
//     case CART_ACTIONS.CLEAR_CART: {
//       return initialState;
//     }
    
//     default:
//       return state;
//   }
// };

// // Create Context
// const CartContext = createContext();

// // Cart Provider Component
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);
  
//   // Action creators
//   const addToCart = (product) => {
//     dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { product } });
//   };
  
//   const incrementItem = (productId) => {
//     dispatch({ type: CART_ACTIONS.INCREMENT_ITEM, payload: { productId } });
//   };
  
//   const decrementItem = (productId) => {
//     dispatch({ type: CART_ACTIONS.DECREMENT_ITEM, payload: { productId } });
//   };
  
//   const removeItem = (productId) => {
//     dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { productId } });
//   };
  
//   const clearCart = () => {
//     dispatch({ type: CART_ACTIONS.CLEAR_CART });
//   };
  
//   // Get item quantity by ID
//   const getItemQuantity = (productId) => {
//     const item = state.cartItems.find(item => item.id === productId);
//     return item ? item.quantity : 0;
//   };
  
//   const value = {
//     ...state,
//     addToCart,
//     incrementItem,
//     decrementItem,
//     removeItem,
//     clearCart,
//     getItemQuantity,
//   };
  
//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export default CartContext;

// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Action types
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT_ITEM: 'INCREMENT_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Item already exists, increment quantity
        const updatedItems = state.cartItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        return {
          ...state,
          cartItems: updatedItems,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + parseFloat(product.price.replace('£', '')),
        };
      } else {
        // Add new item to cart
        const newItem = {
          ...product,
          quantity: 1,
          price: parseFloat(product.price.replace('£', '')),
        };
        
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + newItem.price,
        };
      }
    }
    
    case CART_ACTIONS.INCREMENT_ITEM: {
      const { productId } = action.payload;
      const updatedItems = state.cartItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      
      const item = state.cartItems.find(item => item.id === productId);
      
      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + item.price,
      };
    }
    
    case CART_ACTIONS.DECREMENT_ITEM: {
      const { productId } = action.payload;
      const item = state.cartItems.find(item => item.id === productId);
      
      if (item.quantity === 1) {
        // Remove item if quantity becomes 0
        const updatedItems = state.cartItems.filter(item => item.id !== productId);
        
        return {
          ...state,
          cartItems: updatedItems,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - item.price,
        };
      } else {
        const updatedItems = state.cartItems.map(item =>
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        
        return {
          ...state,
          cartItems: updatedItems,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - item.price,
        };
      }
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId } = action.payload;
      const item = state.cartItems.find(item => item.id !== productId);
      const updatedItems = state.cartItems.filter(item => item.id !== productId);
      
      return {
        ...state,
        cartItems: updatedItems,
        totalQuantity: state.totalQuantity - item.quantity,
        totalPrice: state.totalPrice - (item.price * item.quantity),
      };
    }
    
    case CART_ACTIONS.CLEAR_CART: {
      return initialState;
    }
    
    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Action creators
  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { product } });
  };
  
  const incrementItem = (productId) => {
    dispatch({ type: CART_ACTIONS.INCREMENT_ITEM, payload: { productId } });
  };
  
  const decrementItem = (productId) => {
    dispatch({ type: CART_ACTIONS.DECREMENT_ITEM, payload: { productId } });
  };
  
  const removeItem = (productId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { productId } });
  };
  
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };
  
  // Get item quantity by ID
  const getItemQuantity = (productId) => {
    const item = state.cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  // NEW: Get total item count - This was missing!
  const getTotalItemCount = () => {
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  const value = {
    ...state,
    addToCart,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
    getItemQuantity,
    getTotalItemCount, // Added this function
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;