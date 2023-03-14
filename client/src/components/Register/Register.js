import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <section className="section py-5">
            <div className="row py-5">
                <form id="register" className="col-md-9 m-auto">
                    <div className="container">
                        <h1 className="h1">Register</h1>

                        <div className="col py-3">
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control mt-2" type="email" name="email" placeholder="maria@email.com"/>
                            </div>
                            
                            <div className="form-group mb-3">
                                <label htmlFor="pass">Password:</label>
                                <input className="form-control mt-2" type="password" placeholder="******" name="password"/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="con-pass">Confirm Password:</label>
                                <input className="form-control mt-2" type="password" placeholder="******" name="repeatPassword"/>
                            </div>
                        </div>

                        <div className="col">
                            <button className="btn btn-success btn-lg px-3" type="submit">Register</button>
                        </div>


                        <div className="col mt-2">
                            <span>If you already have profile click <Link to="/login" className="text-success">here</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};