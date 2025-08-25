import {createContext, useContext, useState} from "react";


const NavContext = createContext();

export const NavigationProvider = ({children}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            {children}
        </NavContext.Provider>
    )
}

export const useNavigation = () => useContext(NavContext);