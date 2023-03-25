import { useContext } from 'react';
import { NavLink } from "react-router-dom";

import { CartContext } from '../../contexts/CartContext';
import { LovesContext } from '../../contexts/LovesContext';
import { AuthContext } from "../../contexts/AuthContext";

import './Header.css'

const Header = () => {
    const { isAuthenticated, isAdmin } = useContext(AuthContext);
    const { cart } = useContext(CartContext);
    const { loves } = useContext(LovesContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container d-flex justify-content-between align-items-center">

                <NavLink to={"/"} className="navbar-brand text-success logo h1 align-self-center">
                    uniQUEode
                </NavLink>

                <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                    <div className="flex-fill">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about"} className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/catalog"} className="nav-link">Designs</NavLink>
                            </li>

                            {isAdmin ?
                                <li className="nav-item">
                                    <NavLink to={"/create"} className="nav-link">Create Design</NavLink>
                                </li>
                            : null}

                            <li className="nav-item">
                                <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">

                        {/* TODO: Implement search as a modal, now is not working */}
                        {/* <NavLink className="nav-icon d-none d-lg-inline" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                            <i className="fa fa-fw fa-search text-dark mr-2"></i>
                        </NavLink> */}

                        {isAuthenticated ?
                            <>
                                {!isAdmin &&
                                    <>
                                        <NavLink to={"/cart"} className="nav-icon position-relative text-decoration-none">
                                            <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{cart.length}</span>
                                        </NavLink>

                                        <NavLink to={"/profile"} className="nav-icon position-relative text-decoration-none">
                                            <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{loves.length}</span>
                                        </NavLink>
                                    </>
                                }

                                <NavLink to={"/logout"} className="nav-icon position-relative text-decoration-none">
                                    <i className="fa fa-fw fa-sign-out-alt text-dark mr-4"></i>
                                </NavLink>
                            </>
                            :
                            <NavLink to={"/login"} className="nav-icon position-relative text-decoration-none">
                                <i className="fa fa-fw fa-sign-in-alt text-dark mr-4"></i>
                            </NavLink>
                        }

                    </div>      
                    
                </div>

            </div>
        </nav>
    );
};

export default Header;