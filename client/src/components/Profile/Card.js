import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as designsService from "../../services/designsService";

const Card = ({
    _id,
    designId,
    onLoveDelete,
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
                    <Link to={`/details/${design._id}`} className="h2 text-decoration-none text-dark">{design.name}</Link>
                    <p className="card-text">
                        {design.description}
                    </p>
                </div>
                <button onClick={() => onLoveDelete(_id)} className="btn btn-success px-2">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default memo(Card);