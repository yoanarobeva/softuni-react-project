import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as designsService from '../services/designsService';

export const DesignsContext = createContext();

export const DesignsProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [designs, setDesigns] = useState([]);
    const [filterDesigns, setFilterDesigns] = useState([])
      
    useEffect(() => {
        designsService.getAll()
            .then(result => {
                setDesigns(result);
                setFilterDesigns(result);
            })
    }, []);

    const onCreateDesignSubmit = async (data) => {
        let newDesign = {};
        try {
            if (Object.values(data).includes("")) {
                throw new Error('All fields are required!')
            }
            newDesign = await designsService.create(data);
        } catch (error) {
            return alert(error.message);
        }
        setDesigns(state => [...state, newDesign]);
        navigate('/catalog');
    };

    const onEditDesignSubmit = async (data) => {
        let result = {};
        try {
            if (Object.values(data).includes("")) {
                throw new Error('All fields are required!')
            }
            result = await designsService.edit(data._id, data);
        } catch (error) {
            return alert(error.message);
        }
        setDesigns(state => state.map(x => x._id === data._id ? result : x));
        navigate(`/details/${data._id}`);
    };

    const onDeleteClick = async (designId) => {
        try {
            await designsService.deleteDesign(designId);
        } catch (error) {
            return alert(error.message);
        }
        setDesigns(state => state.filter(x => x._id !== designId));
        navigate("/catalog");
    };

    const onOptionChangeHandler = (value) => {
        switch (value) {
            case "none": setDesigns(state => state.sort((a, b) => a._createdOn - b._createdOn)); break;
            case "alphabetically": setDesigns(state => state.sort((a, b) => a.name.localeCompare(b.name))); break;
            case "price": setDesigns(state => state.sort((a, b) => a.price - b.price)); break;
            case "newest": setDesigns(state => state.sort((a, b) => b._createdOn - a._createdOn)); break;
            default: break;
        };
    };
    const onCategoryClickHandler = (value) => {
        setFilterDesigns(designs);
        const polygons = ["pentagon", "hexagon", "heptagon","octagon"];
        switch (value) {
            case "all": setFilterDesigns(designs); break;
            case "triangle":
            case "square":
            case "circle":
            case "composite": setFilterDesigns(state => state.filter(x => x.shape === value)); break;
            case "polygon": setFilterDesigns(state => state.filter((x) => polygons.includes(x.shape))); break;
            default: break;
        };
    }

    const designContextValues = {
        designs,
        filterDesigns,
        onCreateDesignSubmit,
        onEditDesignSubmit,
        onDeleteClick,
        onOptionChangeHandler,
        onCategoryClickHandler,
    };

    return (
        <DesignsContext.Provider value={designContextValues}>
            {children}
        </DesignsContext.Provider>
    );
};