import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import * as designsService from '../../services/designsService';

export const Details = () => {
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
                                <p className="h3 py-2">{design.price} лв.</p>
                                <p className="py-2">
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-secondary"></i>
                                    {/* TODO: Implement loves */}
                                    <span className="list-inline-item text-dark">Loves 4.8</span>
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


                                {/* TODO: Decide if to implement */}
                                {/* <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Avaliable Color :</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>White / Black</strong></p>
                                    </li>
                                </ul> */}

                                <div className="mt-5">
                                    {/* //TODO Implement add to cart function (submitting the form) */}
                                    <form action="" method="GET">
                                        <input type="hidden" name="product-title" value="Activewear" />
                                        <div className="row">
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item">Category :
                                                        <input type="hidden" name="product-size" id="product-size" value="S" />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">Code</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">Earrings</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">Necklace</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">Broche</span></li>
                                                </ul>
                                            </div>
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item text-right">
                                                        Quantity
                                                        <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                                    <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                        </div>
                                    </form>
                                    <div className="mt-5 d-grid">
                                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Love it!</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};