
import styles from './FilterSideBar.module.css';
const FilterSideBar = ({ categoryProducts, onClose, handleFilterChange }) => {

    const capitalizeFirstLetter = (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <div className={styles.asideContainer}>
            <button className={styles.closeButton} onClick={onClose}>X</button>
            <div className={styles.asideFilter}>
                {categoryProducts.map((filter) => (
                    <div key={filter.category} className={styles.filterBox}>
                    <input
                        type="checkbox"
                        value={filter.category}
                        onClick={(e) => handleFilterChange(filter.category, e.target.checked)}
                    />
                    <label>{capitalizeFirstLetter(filter.category)}</label>
                    </div>
                ))}
           </div>
        </div>
    )
}
export default FilterSideBar;