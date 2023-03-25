import { Link } from "react-router-dom";

const Pagination = () => {
    //TODO: Implement Pagination and map li
    return (
        <div div="row">
            <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item disabled">
                    <Link className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" to="/" >1</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" to="/">2</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" to="/">3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;