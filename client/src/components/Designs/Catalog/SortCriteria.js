import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DesignsContext } from '../../../contexts/DesignsContext';

const SortCriteria = () => {
    const navigate = useNavigate();
    const {onOptionChangeHandler} = useContext(DesignsContext);
    const onOptionChange = (e) => {
        onOptionChangeHandler(e.target.value);
        navigate('/catalog');
    };

    return (
        <div className="col-md-4 pb-4">
            <div className="d-flex">
                <select onChange={onOptionChange} className="form-control">
                    <option value={"none"}>Sort by</option>
                    <option value={"alphabetically"}>A to Z</option>
                    <option value={"price"}>Price</option>
                    <option value={"newest"}>Newest</option>
                </select>
            </div>
        </div>
    );
};

export default memo(SortCriteria);