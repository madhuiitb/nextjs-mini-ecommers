"use client";

const { createContext, useState, useContext } = require("react");

const FilterContext = createContext();

export const FiltersProvider = ({ children }) => {
    
    const [searchValue, setSearchValue] = useState("");
    const [sortOption, setSortOption] = useState('');
    const [isFiltersBarOpen, setIsFiltersBarOpen] = useState(false);
    
    return (
        <FilterContext.Provider
            value={{
                searchValue,
                setSearchValue,
                sortOption,
                setSortOption,
                isFiltersBarOpen,
                setIsFiltersBarOpen
            }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext);