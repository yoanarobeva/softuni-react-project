import { useContext, useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

import * as designsService from "../../../services/designsService";
import { LovesContext } from "../../../contexts/LovesContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { DesignsContext } from "../../../contexts/DesignsContext";

import { DetailsForm } from "./DetailsForm";

export const Details = () => {
    const { isAdmin, userId, isAuthenticated } = useContext(AuthContext)
    const { loves, onClickLove } = useContext(LovesContext);
    const { onDeleteClick } = useContext(DesignsContext)
    const { designId } = useParams();
    const [design, setDesign] = useState({});
    const [isLoved, setIsLoved] = useState(false);

    useEffect(() => {
        designsService.getOne(designId)
            .then(result => {
                setDesign(result);
            })
    }, [designId]);

    useEffect(() => {
        const userLoves = loves.map(x => x.designId);
        if (userLoves.includes(designId)) {
            setIsLoved(true);
        }
    }, [loves, designId]);

    const isOwner = design._ownerId === userId;

    const onLove = async () => {
        await onClickLove(designId);

        setIsLoved(true);
    };

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

                                {!isAdmin && !isOwner && isAuthenticated &&
                                    <p>
                                        <button onClick={onLove} className="btn btn-success text-white" disabled={isLoved}><i className="far fa-heart"></i> Love it!</button>
                                    </p>
                                }

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

                                {isAdmin && isOwner &&
                                    <div className="d-grid">
                                        <Link to={`/details/${designId}/edit`} className="btn btn-success btn-lg">Edit</Link>
                                        <button onClick={() => onDeleteClick(designId)} className="btn btn-success btn-lg mt-2">Delete</button>
                                    </div>
                                }

                                {!isAdmin && !isOwner &&
                                    <DetailsForm design={design} />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};