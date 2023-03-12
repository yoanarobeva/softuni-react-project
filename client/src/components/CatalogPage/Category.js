import { Link } from "react-router-dom";

export const Category = () => {
    //TODO: make this component dynamic when you have database
    return (
        <li className="pb-3">
            <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/">
                Gender
                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
            </Link>
            <ul className="collapse show list-unstyled pl-3">
                {/* TODO: Map this li when you have database */}
                <li><Link className="text-decoration-none" to="/">Men</Link></li>
                <li><Link className="text-decoration-none" to="/">Women</Link></li>
            </ul>
        </li>
    );
};