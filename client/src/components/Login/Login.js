import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const {onLogin} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: ''
    }, onLogin);

    return (
        <section className="section py-5">
            <div className="row py-5">
                <form onSubmit={onSubmit} id="login" className="col-md-9 m-auto">
                    <div className="container">
                        <h1 className="h1">Login</h1>

                        <div className="col py-3">
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input
                                    className="form-control mt-2" 
                                    type="email" 
                                    name="email" 
                                    placeholder="Sokka@gmail.com"
                                    value={values.email}
                                    onChange={changeHandler} 
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="login-pass">Password:</label>
                                <input 
                                    className="form-control mt-2" 
                                    type="password" 
                                    name="password" 
                                    placeholder="******"
                                    value={values.password}
                                    onChange={changeHandler} 
                                />
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