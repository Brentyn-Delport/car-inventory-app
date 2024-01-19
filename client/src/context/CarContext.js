// CarContext.js
// Creates a context for car data and a provider component

import React, { createContext, useState } from "react";
import axios from 'axios'; // Using axious for sending the information to the Express server

// Create a context
export const CarContext = createContext();

// Initial data for cars
const initialCars = [
  {
    model: "2017",
    make: "Tesla",
    registration: "123ABC",
    owner: "John Doe",
  },
];

// CarProvider component that wraps the application with car data and functions
export const CarProvider = ({ children }) => {
  // State to manage the list of cars
  const [cars, setCars] = useState(initialCars);

  // Function to reset cars to their initial state
  const resetCars = () => {
    setCars([...initialCars]); // Reset to initial cars
  };

  // State to store older cars
  const [olderCars, setOlderCars] = useState([]);

  // Function to fetch cars older than 5 years from the server
  const fetchOlderCars = async () => {
    try {
      const response = await axios.get("http://localhost:5001/cars/older");
      setOlderCars(response.data);
    } catch (error) {
      console.error("Error fetching older cars:", error);
    }
  };

  // Function to handle bulk update of cars
  const updateCarsBulk = async (updatedCars) => {
    try {
      await axios.put("http://localhost:5001/cars/bulk-update", updatedCars);
      setCars(updatedCars);
    } catch (error) {
      console.error("Error updating cars:", error);
    }
  };

  // Function to fetch all cars
  const fetchAllCars = async () => {
    try {
      const response = await axios.get("http://localhost:5001/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching all cars:", error);
    }
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        setCars,
        fetchAllCars,
        resetCars,
        updateCarsBulk,
        olderCars,
        fetchOlderCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
