import './TopHeader.css'

const TopHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <i className="fa fa-envelope mx-2"></i>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:uniqueode.brainmade@gmail.com">uniqueode.brainmade@gmail.com</a>
                        <i className="fa fa-phone mx-2"></i>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="tel:+359885825068">+359 88 582 50 68</a>
                    </div>
                    <div>
                        <a className="text-light" href="https://www.facebook.com/uniqueode.brainmade" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="https://www.instagram.com/uniqueode.brainmade.vigo/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="https://www.pinterest.com/uniqueode/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest fa-sm fa-fw me-2"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopHeader;