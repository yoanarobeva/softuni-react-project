import { Link } from "react-router-dom";

export const Category = () => {
    //TODO: make this component dynamic when you have database
    return (
        <div className="col-lg-3">
            <h1 className="h2 pb-4">Shapes</h1>
            
            <ul className="list-unstyled templatemo-accordion">
                {/* TODO: Map this li when you have database */}
                <li><Link className="text-decoration-none" to="/">Triangle</Link></li>
                <li><Link className="text-decoration-none" to="/">Square</Link></li>
                <li><Link className="text-decoration-none" to="/">Circle</Link></li>
                <li><Link className="text-decoration-none" to="/">Polygon</Link></li>
                <li><Link className="text-decoration-none" to="/">Composite</Link></li>
            </ul>
            
        </div>
    );
};