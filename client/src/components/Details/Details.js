export const Details = () => {
    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid" src="assets/img/product_single_10.jpg" alt="Card cap" id="product-detail"/>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">NAME</h1>
                                <p className="h3 py-2">$PRICE</p>
                                <p className="py-2">
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-warning"></i>
                                    <i className="fa fa-heart text-secondary"></i>
                                    <span className="list-inline-item text-dark">Loves 4.8 | 36 Comments</span>
                                </p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Category:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>Triangle</strong></p>
                                    </li>
                                </ul>

                                <h6>Description:</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Avaliable Color :</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>White / Black</strong></p>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5 card card-body">
                        <form action="" method="GET">
                            <input type="hidden" name="product-title" value="Activewear"/>
                            <div className="row">
                                <div className="col-auto">
                                    <ul className="list-inline pb-3">
                                        <li className="list-inline-item">Category :
                                            <input type="hidden" name="product-size" id="product-size" value="S"/>
                                        </li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">Code</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">Earrings</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">Necklace</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success btn-size">Broche</span></li>
                                    </ul>
                                </div>
                                <div className="col-auto">
                                    <ul className="list-inline pb-3">
                                        <li className="list-inline-item text-right">
                                            Quantity
                                            <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                        </li>
                                        <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                        <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                        <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="col d-grid">
                                    <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                </div>
                                <div className="col d-grid">
                                    <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </section>
    );
};