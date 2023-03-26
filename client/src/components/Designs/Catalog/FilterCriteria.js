import { memo, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { DesignsContext } from "../../../contexts/DesignsContext";

const FilterCriteria = () => {
    const {onCategoryClickHandler} = useContext(DesignsContext);

    const onCategoryClick = useCallback((e) => {
        onCategoryClickHandler(e.target.name);
    }, [onCategoryClickHandler]);

    return (
        <div className="col-lg-3">
            <h1 className="h2 pb-4">Category</h1>
            
            <ul className="list-unstyled templatemo-accordion" onClick={onCategoryClick}>
                <li><Link className="text-decoration-none" name="none">All</Link></li>
                <li><Link className="text-decoration-none" name="triangle">Triangle</Link></li>
                <li><Link className="text-decoration-none" name="square">Square</Link></li>
                <li><Link className="text-decoration-none" name="circle">Circle</Link></li>
                <li><Link className="text-decoration-none" name="pentagon">Pentagon</Link></li>
                <li><Link className="text-decoration-none" name="hexagon">Hexagon</Link></li>
                <li><Link className="text-decoration-none" name="heptagon">Heptagon</Link></li>
                <li><Link className="text-decoration-none" name="octagon">Octagon</Link></li>
                <li><Link className="text-decoration-none" name="composite">Composite</Link></li>
            </ul>
            
        </div>
    );
};

export default memo(FilterCriteria);