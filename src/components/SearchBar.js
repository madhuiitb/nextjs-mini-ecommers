"use client";

import { useFilters } from '@/context/FiltersContext';
import styles from './SearchBar.module.css';
const SearchBar = () => {
    
    const { searchValue, setSearchValue } = useFilters();
    return (
        <div className={styles.inputContainer}>
            <input
                placeholder="Search by title..."
                className={styles.input}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;