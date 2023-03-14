import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <section className="section py-5">
            <div className="row py-5">
                <form id="login" className="col-md-9 m-auto">
                    <div className="container">
                        <h1 className="h1">Login</h1>

                        <div className="col py-3">
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control mt-2" type="email" name="email" placeholder="Sokka@gmail.com"/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="login-pass">Password:</label>
                                <input className="form-control mt-2" type="password" name="password" placeholder="******"/>
                            </div>
                        </div>

                        <div className="col">
                            <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                        </div>

                        <div className="col mt-2">
                            <span>If you don't have profile click <Link to="/register" className="text-success">here</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};