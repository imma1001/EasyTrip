import React, { createContext, useState } from 'react';

// Create Context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedSearch, setSelectedSearch] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCost, setSelectedCost] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <DataContext.Provider value={{ selectedSearch, setSelectedSearch,selectedDate, setSelectedDate, selectedCost, setSelectedCost, selectedOption, setSelectedOption }}>
      {children}
    </DataContext.Provider>
  )
}