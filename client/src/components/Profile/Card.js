import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { designsServiceFactory } from "../../services/designsService";
import { useService } from "../../hooks/useService";

export const Card = ({
    designId,
}) => {
    const [design, setDesign] = useState({});
    const designsService = useService(designsServiceFactory);

    useEffect(() => {
        designsService.getOne(designId)
            .then(result => {
                setDesign(result);
            })
    }, [designsService, designId]);
    
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <Link to={`/details/${design._id}`}>
                    <img src={design.imageUrl} className="card-img-top" alt={design.name}/>
                </Link>
                <div className="card-body">
                    <Link to={`/details/${design._id}`} className="h2 text-decoration-none text-dark">{design.name}</Link>
                    <p className="card-text">
                        {design.description}
                    </p>
                </div>
            </div>
        </div>
    );
};