
import { useFilters } from '@/context/FiltersContext';
import styles from './FilterButton.module.css'

const FilterButton = () => {
    const { isFiltersBarOpen, setIsFiltersBarOpen } = useFilters();
    return (
        <div className={styles.filterItemsContainer}>
            <button className={styles.button}
                onClick={() => setIsFiltersBarOpen(!isFiltersBarOpen)}>Filters</button>
        </div>
    )
}

export default FilterButton;