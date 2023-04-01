import { createContext, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { AuthContext } from "./AuthContext";
import * as cartService from '../services/cartService';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = memo(({
    children,
}) => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (userId) {
            cartService.getOwnCart(userId)
                .then(result => {
                    setCart(result);
                })
        }
    }, [userId]);

    const onCartSubmit = useCallback( async (data) => {
        let newCartItem = {}
        try {
            newCartItem = await cartService.create(data);
        } catch (error) {
            return alert(error.message);
        }
        setCart(cart => [...cart, newCartItem]);
        navigate('/cart');
    }, [navigate]);

    const onCartEdit = useCallback( async (cartItemId, quantity) => {
        let newValue = {};
        try {
            newValue = await cartService.edit(cartItemId, quantity);
        } catch (error) {
            return alert(error.message);
        }
        setCart(state => state.map(x => x._id === cartItemId ? newValue : x));
    }, []);

    const onCartDelete = useCallback(async (cartItemId) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete?");
        try {
            if(result) {
                await cartService.remove(cartItemId);
                setCart(state => state.filter(x => x._id !== cartItemId));
            }
        } catch (error) {
            return alert(error.message);
        }
    }, []);

    const cartContextValues = useMemo(() => ({
        cart,
        onCartSubmit,
        onCartDelete,
        onCartEdit,
    }), [cart, onCartSubmit, onCartDelete, onCartEdit]);

    return (
        <CartContext.Provider value={cartContextValues}>
            {children}
        </CartContext.Provider>
    );
});