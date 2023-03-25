import { useContext } from "react";
import { DesignsContext } from "../../contexts/DesignsContext";

const Pagination = () => {
    const { OnPageChange, page } = useContext(DesignsContext)

    return (
        <div div="row">
            <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item">
                    <button
                        disabled={page === 1}
                        onClick={() => OnPageChange(-1)}
                        className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                    >&lt;Prev.</button>
                </li>
                <li className="page-item">
                    <p className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark">{page}</p>
                </li>
                <li className="page-item">
                    <button
                        onClick={() => OnPageChange(+1)}
                        className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                    >Next&gt;</button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;