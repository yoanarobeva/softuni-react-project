import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as lovesService from '../../services/lovesService';

export const CatalogCard = ({
    _id,
    name,
    price,
    imageUrl,
}) => {
    const [isLoved, setIsLoved] = useState(false);

    useEffect(() => {
        lovesService.getAllUserLoves(_id)
            .then(result => {
                if(result) {
                    setIsLoved(true)
                }
            })
    }, [_id])
    
    const onClickLove = async () => {
        await lovesService.love(_id);

        setIsLoved(true);
    };

    return (
    <div className="col-md-4">
        <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
                <img alt="img" className="card-img rounded-0 img-fluid" src={imageUrl} />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                        <li><button onClick={onClickLove} className="btn btn-success text-white" disabled={isLoved}><i className="far fa-heart"></i></button></li>
                        <li><Link className="btn btn-success text-white mt-2" to={`/details/${_id}`}><i className="far fa-eye"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                <Link to={`/details/${_id}`} className="h3 text-decoration-none">{name}</Link>
                
                {/* TODO: Check if you need this and if -  Implement rating and show the right one depending on rating */}
                {/* <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                    </li>
                </ul> */}
                <p className="text-center mb-0">{price} BGN</p>
            </div>
        </div>
    </div>
   );
};