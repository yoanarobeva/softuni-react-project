import { useEffect, useState } from "react";

import * as lovesService from '../../services/lovesService';

import { Card } from "./Card";

export const Profile = () => {
    const user = JSON.parse(sessionStorage.getItem('userData'));

    const [userLoves, setUserLoves] = useState([]);

    useEffect(() => {
        lovesService.getOwnLoves()
            .then(result => {
                setUserLoves(result);
            })
    }, []);

    return (
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <img src="/assets/img/profile.jpg" alt="profilePic" className="rounded-circle w-50 img-fluid border"/>
                        <p className="mt-3">
                            {user.email}
                        </p>
                    </div>
                </div>
                <h1 className="h1">Products you have loved:</h1>
                <div className="row">

                    { userLoves === [] ? userLoves.map(x => <Card key={x._id} {...x} />) : <p className="h3">You have nothing loved...</p>}
                   
                </div>
            </div>
        </section>
    );
};