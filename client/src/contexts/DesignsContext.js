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
    const [action, setAction] = useState("");
      
    useEffect(() => {
        const [method, criteria, match] = action.split("-");
        
        if (method === 'sort') {
            designsService.sort(page, criteria, match)
                .then(result => {
                    setDesigns(result);
                })
        } else if (method === 'filter') {
            designsService.filter(page, criteria, match)
                .then(result => {
                    setDesigns(result);
                })
        } else {
            designsService.getAllByPage(page)
                .then(result => {
                    setDesigns(result);
                })
        }
    }, [page, action, designs.length]);

    const onCreateDesignSubmit = useCallback(async (data) => {
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

    const onOptionChangeHandler = useCallback (async (value) => {
        let criteria = "";
        let order = "";

        switch (value) {
            case "":
            case "none": setAction(''); return;
            case "alphabetically": criteria = "name"; break;
            case "price-asc": criteria = "price"; break;
            case "price-desc": criteria = "price"; order = "desc"; break;
            case "newest": criteria = "_createdOn"; order = "desc"; break;
            case "oldest": criteria = "_createdOn"; order = "asc"; break;
            default: break;
        };

        setAction(`sort-${criteria}-${order}`);
    }, []);

    const onCategoryClickHandler = useCallback ((value) => {
        let criteria = 'shape';
        let match = '';
        
        if (value === 'none') {
            return setAction('');
        } else {
            match = value;
        }

        setAction(`filter-${criteria}-${match}`);
    }, []);

    const onSearchSubmit = useCallback ((values) => {
        const criteria = values.criteria;
        const text = values.search;

        if (criteria && text) {
            setAction(`filter-${criteria}-${text}`);
        } else {
            setAction("");
        }
    }, []);

    const OnPageChange = useCallback((value) => {
        setPage(state => state + value);
    }, []);

    const designContextValues = useMemo(() => ({
        designs,
        page,
        onCreateDesignSubmit,
        onEditDesignSubmit,
        onDeleteClick,
        onOptionChangeHandler,
        onCategoryClickHandler,
        onSearchSubmit,
        OnPageChange,
    }), [designs, page, onCreateDesignSubmit, onEditDesignSubmit, onDeleteClick, onOptionChangeHandler, onCategoryClickHandler, onSearchSubmit, OnPageChange]);

    return (
        <DesignsContext.Provider value={designContextValues}>
            {children}
        </DesignsContext.Provider>
    );
})