import { createContext, useState, useEffect, useContext, useMemo, useCallback, memo } from "react";

import * as lovesService from '../services/lovesService';
import { AuthContext } from "./AuthContext";

export const LovesContext = createContext();

const LovesProvider = ({
    children,
}) => {
    const { userId } = useContext(AuthContext);
    const [loves, setLoves] = useState([])

    useEffect(() => {
        lovesService.getOwnLoves(userId)
            .then(result => {
                if (result) {
                    setLoves(result);
                }
            })
    }, [userId]);

    const onClickLove = useCallback (async (designId) => {
        let newLove = {};
        try {
            newLove = await lovesService.love(designId);
        } catch (error) {
            return alert(error.message);
        }
        setLoves(state => [...state, newLove]);
    }, []);

    const onLoveDelete = useCallback(async (loveId) => {
        try {
            await lovesService.remove(loveId);
        } catch (error) {
            return alert(error.message);
        }
        setLoves(state => state.filter(x => x._id !== loveId));
    }, []);

    const lovesContextValues = useMemo (() => ({
        loves,
        onClickLove,
        onLoveDelete,
    }), [loves, onClickLove, onLoveDelete])

    return (
        <LovesContext.Provider value={lovesContextValues}>
            {children}
        </LovesContext.Provider>
    );
};

export default memo(LovesProvider);