import { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
import * as cartService from '../services/cartService';

export const CartContext = createContext();

export const CartProvider = ({
    children,
}) => {
    const { userId } = useContext(AuthContext)
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (userId) {
            cartService.getOwnCart(userId)
                .then(result => {
                    setCart(result);
                })
        }
    }, [userId]);

    const cartContextValues = {
        cart,
        setCart,
    }

    return (
        <CartContext.Provider value={cartContextValues}>
            {children}
        </CartContext.Provider>
    );
};