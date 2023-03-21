import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LovesContext } from "../../contexts/LovesContext";
import * as lovesService from '../../services/lovesService';

export const CatalogCard = ({
    _id,
    name,
    price,
    imageUrl,
}) => {
    const { loves } = useContext(LovesContext);
    const [isLoved, setIsLoved] = useState(false);

    useEffect(() => {
        const userLoves = loves.map(x => x.designId);
        if (userLoves.includes(_id)) {
            setIsLoved(true);
        }
    }, [loves, _id]);

    const onClickLove = async () => {
        await lovesService.love(_id);
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
                    <p className="text-center mb-0">{price} BGN</p>
                </div>
            </div>
        </div>
    );
};