import React, { createContext, useState } from 'react';

// Create a context with a default value (optional)
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('default value'); // Replace with your state

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
