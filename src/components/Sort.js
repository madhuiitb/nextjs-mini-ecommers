
import { useFilters } from '@/context/FiltersContext';
import styles from './Sort.module.css';
const Sort = () => {
    
    const { sortOption, setSortOption } = useFilters();
    return (
        <div className={styles.sortingContainer}>
            <select
                value={sortOption}
                className={styles.select}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="">Sorting</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
            </select>
        </div>
    )
}

export default Sort;