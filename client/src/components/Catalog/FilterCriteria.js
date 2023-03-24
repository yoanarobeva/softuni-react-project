import { useContext } from "react";
import { Link } from "react-router-dom";
import { DesignsContext } from "../../contexts/DesignsContext";

export const FilterCriteria = () => {
    const {onCategoryClickHandler} = useContext(DesignsContext);

    const onCategoryClick = (e) => {
        onCategoryClickHandler(e.target.name);
    };

    return (
        <div className="col-lg-3">
            <h1 className="h2 pb-4">Shapes</h1>
            
            <ul className="list-unstyled templatemo-accordion">
                <li><Link to={"/catalog"} className="text-decoration-none" onClick={onCategoryClick} name={"none"}>All</Link></li>
                <li><Link to={"/catalog/triangle"} className="text-decoration-none" onClick={onCategoryClick} name={"triangle"}>Triangle</Link></li>
                <li><Link to={"/catalog/square"} className="text-decoration-none" onClick={onCategoryClick} name={"square"}>Square</Link></li>
                <li><Link to={"/catalog/circle"} className="text-decoration-none" onClick={onCategoryClick} name={"circle"}>Circle</Link></li>
                <li><Link to={"/catalog/polygon"} className="text-decoration-none" onClick={onCategoryClick} name={"polygon"}>Polygon</Link></li>
                <li><Link to={"/catalog/composite"} className="text-decoration-none" onClick={onCategoryClick} name={"composite"}>Composite</Link></li>
            </ul>
            
        </div>
    );
};