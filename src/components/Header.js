import Cart from "./Cart";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import styles from "./Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const navLinks = [
        { path: '/', label: 'Home', icon: faHome },
        { path: '/cart', label: 'Cart', icon: faShoppingCart },
    ]

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {navLinks.length > 0 ? (
                        navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    aria-label={`Navigate to ${link.label}`}
                                    title={link.label}
                                >
                                    <FontAwesomeIcon icon={link.icon} className={styles.navIcon} />
                                    <span className={styles.navLabel}>{link.label}</span>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No navigation links available</li>
                    )}
                </ul>
            </nav>
            <div className={styles.searchBar}>
                <SearchBar />
            </div>
            <div className={styles.filterButtons}>
                <Sort />
                <FilterButton />
                <Cart />
            </div>
        </header>
    )
}

export default Header;