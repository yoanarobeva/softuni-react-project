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
        const result = await designsService.edit(data._id, data);

        setDesigns(state => state.map(x => x._id === data._id ? result : x));

        navigate(`/details/${data._id}`)
    };

    const onDeleteClick = async (designId) => {
        await designsService.deleteDesign(designId);
        setDesigns(state => state.filter(x => x._id !== designId));
        navigate("/catalog");
    };

    const designContextValues = {
        designs,
        onCreateDesignSubmit,
        onEditDesignSubmit,
        onDeleteClick,
    };

    return (
        <DesignsContext.Provider value={designContextValues}>
            {children}
        </DesignsContext.Provider>
    );
};