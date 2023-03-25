import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { DesignsContext } from '../../../contexts/DesignsContext';

import CatalogCard from "./CatalogCard";
import FilterCriteria from "./FilterCriteria";
import SortCriteria from './SortCriteria';
import Pagination from "../../Pagination/Pagination";
import Search from '../../Search/Search';
import './Catalog.css'

const Catalog = () => {
    let { designs, filterDesigns } = useContext(DesignsContext);
    const {category} = useParams();

    if(category) {
        designs = filterDesigns;
    }

    return (
        <div className="container py-5">
            <div className="row">
                <FilterCriteria />
                <div className="col-lg-9">
                    <div className='row'>
                        <Search />
                        <SortCriteria />
                    </div>

                    <div className="row">

                        {designs.length ?
                            designs.map(x => <CatalogCard key={x._id} {...x} />)
                        :
                            <h2 className='h2'>There is no designs...</h2>
                        }

                    </div>

                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Catalog;