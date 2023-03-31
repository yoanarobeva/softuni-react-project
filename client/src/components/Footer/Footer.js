import { Link } from "react-router-dom";

import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">uniQUEode</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                1000, Sofia, Bulgaria
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <a className="text-decoration-none" href="tel:+359885825068">+359 88 582 50 68</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="mailto:info@company.com">uniqode@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Designs</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><Link className="text-decoration-none" to="/catalog">View our designs</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><Link className="text-decoration-none" to="/">Home</Link></li>
                            <li><Link className="text-decoration-none" to="/about">About Us</Link></li>
                            <li><Link className="text-decoration-none" to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a rel="noreferrer" className="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/uniqueode.brainmade/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a rel="noreferrer" className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/uniqueode.brainmade.vigo/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a rel="noreferrer" className="text-light text-decoration-none" target="_blank" href="https://www.pinterest.com/uniqueode/"><i className="fab fa-pinterest fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright &copy; 2023 uniQUEode by Diana Todorova
                                | Designed by <a rel="noreferrer" href="https://templatemo.com" target="_blank">TemplateMo</a> and Yoana Robeva
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;