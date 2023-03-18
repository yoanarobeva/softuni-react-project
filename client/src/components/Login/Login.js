import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";

export const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onLogin = async (e) => {
        e.preventDefault();
        await authService.login(values);
        navigate('/catalog')
    };
    return (
        <section className="section py-5">
            <div className="row py-5">
                <form onSubmit={onLogin} id="login" className="col-md-9 m-auto">
                    <div className="container">
                        <h1 className="h1">Login</h1>

                        <div className="col py-3">
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input onChange={onChangeHandler} className="form-control mt-2" type="email" name="email" placeholder="Sokka@gmail.com"/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="login-pass">Password:</label>
                                <input onChange={onChangeHandler} className="form-control mt-2" type="password" name="password" placeholder="******"/>
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