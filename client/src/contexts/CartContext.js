import { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
import * as cartService from '../services/cartService';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({
    children,
}) => {
    const navigate = useNavigate();
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

    const onCartSubmit = async (data) => {
        const newCartItem = await cartService.create(data);

        setCart(state => [...state, newCartItem]);
        
        navigate('/cart');
    };

    const onCartEdit = async (cartItemId, quantity) => {
        const newValue = await cartService.edit(cartItemId, quantity);
        setCart(state => state.map(x => x._id === cartItemId ? newValue : x));
    }

    const onCartDelete = async (cartItemId) => {
        await cartService.remove(cartItemId);
        setCart(state => state.filter(x => x._id !== cartItemId));
    };

    const cartContextValues = {
        cart,
        onCartSubmit,
        onCartDelete,
        onCartEdit,
    }

    return (
        <CartContext.Provider value={cartContextValues}>
            {children}
        </CartContext.Provider>
    );
};