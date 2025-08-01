import React, { createContext, useState, useContext } from 'react';

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0); // Default to the first page
  const itemsPerPage = 6; // Define how many items per page

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage, itemsPerPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);