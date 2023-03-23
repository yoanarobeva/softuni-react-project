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

    const lovesContextValues = {
        loves,
        setLoves,
    }

    return (
        <LovesContext.Provider value={lovesContextValues}>
            {children}
        </LovesContext.Provider>
    );
};