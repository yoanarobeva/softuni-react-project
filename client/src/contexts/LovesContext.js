import { createContext, useState, useEffect, useContext } from "react";

import * as lovesService from '../services/lovesService';
import { AuthContext } from "./AuthContext";

export const LovesContext = createContext();

export const LovesProvider = ({
    children,
}) => {
    const { userId } = useContext(AuthContext);
    const [loves, setLoves] = useState([])

    useEffect(() => {
        if (userId) {
            lovesService.getOwnLoves(userId)
                .then(result => {
                    if (result) {
                        setLoves(result);
                    }
                })
        }
    }, [userId]);

    const onClickLove = async (designId) => {
        const newLove = await lovesService.love(designId);
        setLoves(state => [...state, newLove]);
    };

    const onLoveDelete = async (loveId) => {
        await lovesService.remove(loveId);
        setLoves(state => state.filter(x => x._id !== loveId));
    };

    const lovesContextValues = {
        loves,
        onClickLove,
        onLoveDelete,
    }

    return (
        <LovesContext.Provider value={lovesContextValues}>
            {children}
        </LovesContext.Provider>
    );
};