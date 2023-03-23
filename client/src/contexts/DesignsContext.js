import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as designsService from '../services/designsService';

export const DesignsContext = createContext();

export const DesignsProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        designsService.getAll()
            .then(result => {
                setDesigns(result);
            })
    }, []);

    const onCreateDesignSubmit = async (data) => {
        const newDesign = await designsService.create(data);

        setDesigns(state => [...state, newDesign]);

        navigate('/catalog');
    };

    const onEditDesignSubmit = async (data) => {

    };

    const designContextValues = {
        designs,
        setDesigns,
        onCreateDesignSubmit,
        onEditDesignSubmit,
    };

    return (
        <DesignsContext.Provider value={designContextValues}>
            {children}
        </DesignsContext.Provider>
    );
};