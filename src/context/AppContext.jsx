import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

function AppContextProvier({ children }) {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterBy, setFilterBy] = useState("None");
  const [sortBy, setSortBy] = useState("None");

  function resetPages() {
    setTotalPages(0);
    setCurrentPage(1);
  }

  function resetFilter() {
    setFilterBy("None");
    setSortBy("None");
  }

  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        products,
        setProducts,
        selectedCategory,
        setSelectedCategory,
        resetPages,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        filterBy,
        sortBy,
        setFilterBy,
        setSortBy,
        resetFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvier;
