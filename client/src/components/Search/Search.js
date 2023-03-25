import { memo, useContext } from "react";
import {DesignsContext} from "../../contexts/DesignsContext";
import { useForm } from "../../hooks/useForm";

const Search = () => {
    const {onSearchSubmit} = useContext(DesignsContext);
    const {values, changeHandler, onSubmit} = useForm({
        search: "",
    }, onSearchSubmit);
   
    return (
        <div className="col-md-8 pb-4">
            <div className="d-flex">
                <form onSubmit={onSubmit}  method="POST" className="modal-content modal-body border-0 p-0">
                    <div className="input-group mb-2">
                        <input 
                            onChange={changeHandler}
                            value={values.search}
                            type="text"
                            className="form-control" 
                            id="inputModalSearch" 
                            name="search" 
                            placeholder="Search design ..."
                        />
                        <button type="submit" className="input-group-text bg-success text-light">
                            <i className="fa fa-fw fa-search text-white"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(Search);