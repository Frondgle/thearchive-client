import React, { createContext, useState, useContext } from 'react';

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0); // Default to the first page

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);