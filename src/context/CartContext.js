"use client";

const { createContext, useState, useContext, useEffect } = require("react");

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, [])
    
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cartItems');
        }
    }, [cartItems]);


    const addToCart = (item) => {
        console.log("cartItems", cartItems, item);
        setCartItems((prevItems) => [...prevItems, item])
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => {
            const index = prev.findIndex((item) => item.id === id);
            if (index !== -1) {
                const newCart = [...prev];
                newCart.splice(index, 1);
                return newCart;
            }
            return prev;
        });
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);