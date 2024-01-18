// CarContext.js
// Creates a context for car data and a provider component

import React, { createContext, useState } from 'react';

// Create a context
export const CarContext = createContext();

// Provider component
export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]); // State to store the list of cars

  // Add other state and methods as needed

  return (
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  );
};
