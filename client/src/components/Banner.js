export const Banner = () => {
    return (
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src="./assets/img/banner_img_01.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left align-self-center">
                                    <h1 className="h1 text-success"><b>uniQUEode</b> brainmade</h1>
                                    <h3 className="h2">Geometric design</h3>
                                    <p>Geometric jewelry : : inspired by the Sacred Geometry</p> 
                                    <p>designed by code : : produced by 3D print</p>
                                    <p>
                                        Learn more <a className="text-success" href="/about">about us</a>, check out <a className="text-success" href="/catalog">our designs</a> or <a className="text-success" href="/contact">contact us</a> directly.
                                    </p>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src="./assets/img/banner_img_02.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Choose your unique code!</h1>
                                    <h3 className="h2">Keep it only for you</h3>
                                    <p>
                                        Each code is <strong>unique</strong>! It will not be repeated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src="./assets/img/banner_img_03.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Create your jewelry!</h1>
                                    <h3 className="h2">3D print it</h3>
                                    <p>
                                        We can 3D print your unique jewelry! You can choose to make it a beautiful pair of earrings or necklace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                <i className="fas fa-chevron-right"></i>
            </a>
        </div>
    );
};