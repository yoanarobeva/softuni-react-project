import { useContext } from 'react';

import './Catalog.css'
import { DesignsContext } from '../../contexts/DesignsContext';

import { CatalogCard } from "./CatalogCard";
import { Category } from "./Category";
import { Pagination } from "../Pagination/Pagination";
import { FilterCriteria } from './FilterCriteria';

export const Catalog = () => {
    const { designs } = useContext(DesignsContext);

    return (
        <div className="container py-5">
            <div className="row">

                <Category />

                <div className="col-lg-9">

                    <FilterCriteria />

                    <div className="row">

                        {designs.map(x => <CatalogCard key={x._id} {...x} />)}

                    </div>

                    <Pagination />

                </div>

            </div>
        </div>
    );
};