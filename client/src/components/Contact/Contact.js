import { ContactForm } from "./ContactForm";
import { Map } from "./Map";

export const Contact = () => {
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p>
                        If you need more information or you're willing to meet us, please, be more than welcome to contact us!
                    </p>
                </div>
            </div>

            <Map />

            <div className="row">
                
                <ContactForm />
                
            </div>
        </>
    );
};