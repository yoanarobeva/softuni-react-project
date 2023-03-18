import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as designsService from '../../services/designsService';

export const Card = ({
    designId,
}) => {
    const [design, setDesign] = useState({});

    useEffect(() => {
        designsService.getOne(designId)
            .then(result => {
                setDesign(result);
            })
    }, [designId]);
    
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <Link to={`/details/${design._id}`}>
                    <img src={design.imageUrl} className="card-img-top" alt={design.name}/>
                </Link>
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                        <li className="text-muted text-right">{design.price} BGN</li>
                    </ul>
                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">{design.name}</a>
                    <p className="card-text">
                        {design.description}
                    </p>
                </div>
            </div>
        </div>
    );
};