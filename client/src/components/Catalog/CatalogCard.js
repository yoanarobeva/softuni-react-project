import { Link } from "react-router-dom";

export const CatalogCard = ({
    _id,
    name,
    price,
    imageUrl,
}) => {
   return (
    <div className="col-md-4">
        <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
                <img alt="img" className="card-img rounded-0 img-fluid" src={imageUrl} />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                        {/* TODO: Implement like, details and add to cart functions */}
                        <li><Link className="btn btn-success text-white" to={`/like/${_id}`}><i className="far fa-heart"></i></Link></li>
                        <li><Link className="btn btn-success text-white mt-2" to={`/details/${_id}`}><i className="far fa-eye"></i></Link></li>
                        <li><Link className="btn btn-success text-white mt-2" to={`/addToCard/${_id}`}><i className="fas fa-cart-plus"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                <Link to={`/details/${_id}`} className="h3 text-decoration-none">{name}</Link>
                
                {/* TODO: Check if you need this and if -  Implement rating and show the right one depending on rating */}
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                        <i className="text-warning fa fa-heart"></i>
                        <i className="text-warning fa fa-heart"></i>
                        <i className="text-warning fa fa-heart"></i>
                        <i className="text-muted fa fa-heart"></i>
                        <i className="text-muted fa fa-heart"></i>
                    </li>
                </ul>
                <p className="text-center mb-0">{price} лв.</p>
            </div>
        </div>
    </div>
   );
};