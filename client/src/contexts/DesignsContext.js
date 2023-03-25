import { createContext, useState, useEffect, useCallback, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";

import * as designsService from '../services/designsService';

export const DesignsContext = createContext();

export const DesignsProvider = memo(({
    children,
}) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [designs, setDesigns] = useState([]);
    const [filterDesigns, setFilterDesigns] = useState([]);
      
    useEffect(() => {
        designsService.getAllByPage(page)
            .then(result => {
                setDesigns(result);
                setFilterDesigns(result);
            })
    }, [page, designs.length]);

    const onCreateDesignSubmit = useCallback(async (data) => {
        let newDesign = {};
        console.log(data);
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
    }, [navigate]);

    const onEditDesignSubmit = useCallback (async (data) => {
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
    }, [navigate]);

    const onDeleteClick = useCallback (async (designId) => {
        try {
            await designsService.deleteDesign(designId);
        } catch (error) {
            return alert(error.message);
        }
        setDesigns(state => state.filter(x => x._id !== designId));
        navigate("/catalog");
    }, [navigate]);

    const onOptionChangeHandler = useCallback ((value) => {
        switch (value) {
            case "none": setDesigns(state => state.sort((a, b) => a._createdOn - b._createdOn)); break;
            case "alphabetically": setDesigns(state => state.sort((a, b) => a.name.localeCompare(b.name))); break;
            case "price": setDesigns(state => state.sort((a, b) => a.price - b.price)); break;
            case "newest": setDesigns(state => state.sort((a, b) => b._createdOn - a._createdOn)); break;
            default: break;
        };
    }, []);

    const onCategoryClickHandler = useCallback ((value) => {
        setFilterDesigns(designs);
        const polygons = ["pentagon", "hexagon", "heptagon","octagon"];
        switch (value) {
            case "all": break;
            case "triangle":
            case "square":
            case "circle":
            case "composite": setFilterDesigns(state => state.filter(x => x.shape === value)); break;
            case "polygon": setFilterDesigns(state => state.filter((x) => polygons.includes(x.shape))); break;
            default: break;
        };
    }, [designs]);

    const onSearchSubmit = useCallback ((values) => {
        setFilterDesigns(designs);

        const text = values.search;
        // eslint-disable-next-line
        const searchResult = designs.filter((design) => Object.values(design).find(v => v == text));
        console.log(searchResult);

        setFilterDesigns(searchResult);
        if(text) {
            navigate('/catalog/search');
        } else {
            navigate('/catalog');
        }
    }, [designs, navigate]);

    const OnPageChange = useCallback((value) => {
        setPage(state => state + value);
    }, []);

    const designContextValues = useMemo(() => ({
        designs,
        filterDesigns,
        page,
        onCreateDesignSubmit,
        onEditDesignSubmit,
        onDeleteClick,
        onOptionChangeHandler,
        onCategoryClickHandler,
        onSearchSubmit,
        OnPageChange,
    }), [designs, filterDesigns, page, onCreateDesignSubmit, onEditDesignSubmit, onDeleteClick, onOptionChangeHandler, onCategoryClickHandler, onSearchSubmit, OnPageChange]);

    return (
        <DesignsContext.Provider value={designContextValues}>
            {children}
        </DesignsContext.Provider>
    );
})