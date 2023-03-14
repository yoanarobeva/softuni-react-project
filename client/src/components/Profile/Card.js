import { Link } from "react-router-dom";

export const Card = () => {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <Link to="/details/id">
                    <img src="./assets/img/feature_prod_01.jpg" className="card-img-top" alt="..."/>
                </Link>
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            <i className="text-warning fa fa-heart"></i>
                            <i className="text-warning fa fa-heart"></i>
                            <i className="text-warning fa fa-heart"></i>
                            <i className="text-muted fa fa-heart"></i>
                            <i className="text-muted fa fa-heart"></i>
                        </li>
                        <li className="text-muted text-right">$240.00</li>
                    </ul>
                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Gym Weight</a>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                    </p>
                </div>
            </div>
        </div>
    );
};