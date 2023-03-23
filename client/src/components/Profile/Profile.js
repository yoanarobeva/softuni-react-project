import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { LovesContext } from "../../contexts/LovesContext";

import { Card } from "./Card";

export const Profile = () => {
    const { userEmail } = useContext(AuthContext);
    const { loves, onLoveDelete } = useContext(LovesContext);

    return (
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <img src="/assets/img/profile.jpg" alt="profilePic" className="rounded-circle w-50 img-fluid border" />
                        <p className="mt-3">
                            {userEmail}
                        </p>
                    </div>
                </div>
                <h2 className="h2">Products you have loved:</h2>
                <div className="row">

                    {loves.map(x => <Card key={x._id} {...x} onLoveDelete={onLoveDelete} />)}
                    {loves === [] ? <p className="h3">You have nothing loved...</p> : null}

                </div>
            </div>
        </section>
    );
};