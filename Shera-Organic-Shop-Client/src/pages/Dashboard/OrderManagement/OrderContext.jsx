// OrderContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Define initial state and reducer
const initialState = {
  orders: [],
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    // Add more cases for different actions if needed
    default:
      return state;
  }
};

// Create context
const OrderContext = createContext();

// Create context provider
export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const addOrder = (order) => {
    dispatch({ type: 'ADD_ORDER', payload: order });
  };
  // Add more functions for managing orders if needed

  return (
    <OrderContext.Provider value={{ state, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Create custom hook for using the context
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
