import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "@/context/ThemeContext";
import styles from "./ThemeIcon.module.css";

const ThemeIcon = () => {

    const { theme, toggleTheme } = useTheme();
    return(
        <div className={styles.themeContainer}>
            <button className={styles.button}
                    onClick={toggleTheme}>
                <FontAwesomeIcon
                              icon={theme === "light" ? faMoon : faSun}
                              onClick={toggleTheme}
                              className={styles.icon}
                          />
                          <span className={styles.navLabel}>
                  {theme === "light" ? "Dark" : "Light"}
                </span>

            </button>
        </div>
    )
}

export default ThemeIcon;