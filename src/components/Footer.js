import styles from "./Footer.module.css";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link href="/" title="Home" className={styles.navItem}>
                        <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                        <span className={styles.navLabel}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/cart" title="Cart" className={styles.navItem}>
                        <FontAwesomeIcon icon={faShoppingCart} className={styles.navIcon} />
                        <span className={styles.navLabel}>Cart</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Footer;