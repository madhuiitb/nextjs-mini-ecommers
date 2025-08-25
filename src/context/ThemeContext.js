import {createContext, useContext, useEffect, useState} from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    },[]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);

    },[theme]);

    const toggleTheme = () => {
        console.log(theme);
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div data-theme={theme}>{children}</div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);