import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link to={"/"} className="btn btn-success text-white"><span className="glyphicon glyphicon-home"></span>
                                Take Me Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};