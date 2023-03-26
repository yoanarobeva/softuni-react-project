import { memo, useContext } from "react";
import { DesignsContext } from "../../contexts/DesignsContext";
import { useForm } from "../../hooks/useForm";

const Search = () => {
    const { onSearchSubmit } = useContext(DesignsContext);
    const { values, changeHandler, onSubmit } = useForm({
        search: "",
        criteria: "",
    }, onSearchSubmit);

    return (
        <div className="col-md-8 pb-4">
            <div className="d-flex">
                <form onSubmit={onSubmit} method="POST" className="modal-content modal-body border-0 p-0">
                    <div className="input-group mb-2">
                        <input
                            onChange={changeHandler}
                            value={values.search}
                            type="text"
                            className="form-control"
                            name="search"
                            placeholder="Search design ..."
                        />
                        
                        <button type="submit" className="input-group-text bg-success text-light">
                            <i className="fa fa-fw fa-search text-white"></i>
                        </button>
                    </div>

                    <div className="input-group">
                        <span className="col-md-3 ">Search criteria:</span>
                        <div className="form-check col-md-2">
                            <input 
                                checked={values.criteria === "name"}
                                onChange={changeHandler} 
                                value="name"
                                className="form-check-input" 
                                type="radio"
                                name="criteria" 
                            />
                            <label className="form-check-label">
                                Name
                            </label>
                        </div>
                        <div className="form-check col-md-2">
                            <input 
                                checked={values.criteria === "price"} 
                                onChange={changeHandler} 
                                value="price"
                                className="form-check-input" 
                                type="radio" 
                                name="criteria" 
                            />
                            <label className="form-check-label">
                                Price
                            </label>
                        </div>
                        <div className="form-check col-md-2">
                            <input 
                                checked={values.criteria === "description"}
                                onChange={changeHandler} 
                                className="form-check-input" 
                                value="description"
                                type="radio"
                                name="criteria" 
                            />
                            <label className="form-check-label">
                                Description
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(Search);