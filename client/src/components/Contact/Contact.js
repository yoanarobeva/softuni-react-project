import { ContactForm } from "./ContactForm";
// import { Map } from "./Map";

export const Contact = () => {
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p>
                        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>

            {/* <Map /> */}

            <div className="container py-5">
                <div className="row py-5">
                    
                    <ContactForm />
                    
                </div>
            </div>
        </>
    );
};