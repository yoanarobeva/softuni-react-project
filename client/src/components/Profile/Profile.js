import { Card } from "./Card";

export const Profile = () => {
    return (
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <img src="/assets/img/profile.jpg" alt="profilePic" className="rounded-circle w-50 img-fluid border"/>
                        <p className="mt-3">
                            email@email.com
                        </p>
                    </div>
                </div>
                <h1 className="h1">Products you have loved:</h1>
                <div className="row">
                   <Card />
                   <Card />
                   <Card />
                </div>
            </div>
        </section>
    );
};