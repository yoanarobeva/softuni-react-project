import { Link } from "react-router-dom";

import { CatalogCard } from "./CatalogCard";
import { Category } from "./Category";
import { Pagination } from "./Pagination";

export const CatalogPage = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">

                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            {/* TODO: Map this component when you have database / try with CATEGORY, SHAPE, RATING, PRICE?,  */}
                            <Category />
                        </ul>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline shop-top-menu pb-3 pt-1">
                                    {/* TODO: Map this li when you have database and change href */}
                                    <li className="list-inline-item">
                                        <Link className="h3 text-dark text-decoration-none mr-3" to="/">All</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="h3 text-dark text-decoration-none mr-3" to="/">Men's</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="h3 text-dark text-decoration-none" to="/">Women's</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <div className="d-flex">
                                    {/* TODO: Implement filter criteria */}
                                    <select className="form-control">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* TODO: Map CatalogCard when you have database */}
                            <CatalogCard />
                        </div>
                        <Pagination />
                    </div>

                </div>
            </div>
        </>
    );
};