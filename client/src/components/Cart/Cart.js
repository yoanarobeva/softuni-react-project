import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import { CartCard } from "./CartCard";

export const Cart = () => {
    const { cart } = useContext(CartContext);

    let allTotalPrice = 0;
    cart.map(x => allTotalPrice += x.totalPrice);

    return (
        <section className="h-100 h-custom">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">

                        <div className="table-responsive">
                            <h3 className="fw-bold mb-5">
                                <Link className="text-success" to={'/catalog'}><i className="fas fa-angle-left me-2"></i>Back to shopping</Link>
                            </h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="h3">Shopping Bag</th>
                                        <th scope="col" className="h3">Shape</th>
                                        <th scope="col" className="h3">Quantity</th>
                                        <th scope="col" className="h3">Price</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {cart.map(x => <CartCard key={x._id} {...x} />)}

                                </tbody>
                            </table>
                        </div>

                        <div className="card shadow-2-strong mb-5 mb-lg-0">
                            <div className="card-body p-4">

                                <div className="row">
                                    <div className="col-lg-4 col-xl-3">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2">Subtotal</p>
                                            <p className="mb-2">{allTotalPrice} BGN</p>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0">Shipping</p>
                                            <p className="mb-0">6 BGN</p>
                                        </div>

                                        <hr className="my-4" />

                                        <div className="d-flex justify-content-between mb-4">
                                            <p className="mb-2">Total (tax included)</p>
                                            <p className="mb-2">{allTotalPrice + 6} BGN</p>
                                        </div>

                                        <button type="button" className="btn btn-success btn-block btn-lg">
                                            <div className="d-flex justify-content-between">
                                                <span>Checkout</span>
                                            </div>
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}