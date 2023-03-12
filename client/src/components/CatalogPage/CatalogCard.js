import { Link } from "react-router-dom";

export const CatalogCard = () => {
   return (
    <div className="col-md-4">
        <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
                <img alt="img" className="card-img rounded-0 img-fluid" src="assets/img/shop_01.jpg"/>
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                        {/* TODO: Implement like, details and add to cart functions */}
                        <li><Link className="btn btn-success text-white" to="/like/id"><i className="far fa-heart"></i></Link></li>
                        <li><Link className="btn btn-success text-white mt-2" to="/details/id"><i className="far fa-eye"></i></Link></li>
                        <li><Link className="btn btn-success text-white mt-2" to="/addToCart/id"><i className="fas fa-cart-plus"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                <Link to="/details/id" className="h3 text-decoration-none">DESIGN NAME</Link>
                {/* TODO: Check if you need this one */}
                {/* <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
                    <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1">S</span>
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1">M</span>
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1">L</span>
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1">X</span>
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1">XL</span>
                    </li>
                </ul> */}
                {/* TODO: Check if you need this and if -  Implement rating and show the right one depending on rating */}
                {/* <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                        <i className="text-warning fa fa-heart"></i>
                        <i className="text-warning fa fa-heart"></i>
                        <i className="text-warning fa fa-heart"></i>
                        <i className="text-muted fa fa-heart"></i>
                        <i className="text-muted fa fa-heart"></i>
                    </li>
                </ul> */}
                <p className="text-center mb-0">$PRICE</p>
            </div>
        </div>
    </div>
   );
};