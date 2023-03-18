import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import * as designsService from '../../services/designsService';
import { DetailsForm } from "./DetailsForm";

export const Details = ({
    setCart,
}) => {
    const { designId } = useParams();
    const [design, setDesign] = useState({});

    useEffect(() => {
        designsService.getOne(designId)
            .then(result => {
                setDesign(result);
            })
    }, [designId]);

    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid" src={design.imageUrl} alt={design._id} id="product-detail" />
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{design.name}</h1>
                                <p className="h3 py-2">{design.price} BGN</p>
                                {/* TODO: Implement rating /eventually/ */}
                                {/* <p className="py-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <span className="list-inline-item text-dark">Rating 4.8</span>
                                </p> */}

                                {/* TODO: Implement loves here as well when loved change Love it! to Loved! */}
                                <p>
                                    <button className="btn btn-success text-white"><i className="far fa-heart"></i> Love it!</button>
                                </p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Shape:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>{design.shape}</strong></p>
                                    </li>
                                </ul>

                                <h6>Description:</h6>
                                <p>{design.description}</p>

                                <DetailsForm designId={designId} setCart={setCart} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};