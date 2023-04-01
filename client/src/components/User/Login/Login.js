import { memo, useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/AuthContext";

const Login = () => {
    const {onLogin} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: '',
    }, onLogin);

    const [errors, setErrors] = useState({
        requiredEmail: false,
        testEmail: false,
        requiredPassword: false,
    });

    const onEmailBlur = useCallback(() => {
        const rgx = /^(.+)@(.+)$/;

        if (values.email === "") {
            setErrors(state => ({...state, requiredEmail:true, testEmail: false}));
        } else  if (!rgx.test(values.email)) {
            setErrors(state => ({...state, requiredEmail:false, testEmail: true}));
        } else {
            setErrors(state => ({...state, requiredEmail: false, testEmail: false}));
        };
    }, [values]);

    const onPasswordBlur = useCallback(() => {
        if (values.password === "") {
            setErrors(state => ({...state, requiredPassword: true}));
        } else {
            setErrors(state => ({...state, requiredPassword: false}));
        }
    }, [values]);

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
                                    value={values.email}
                                    onChange={changeHandler}
                                    onBlur={onEmailBlur}
                                />
                                {errors.requiredEmail && <span style={{color: "red"}}>This field is required</span>}
                                {errors.testEmail && <span style={{color: "red"}}>Enter valid email</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="login-pass">Password:</label>
                                <input 
                                    className="form-control mt-2" 
                                    type="password" 
                                    name="password" 
                                    value={values.password}
                                    onChange={changeHandler}
                                    onBlur={onPasswordBlur} 
                                />
                                {errors.requiredPassword && <span style={{color: "red"}}>This field is required</span>}

                            </div>
                        </div>

                        <div className="col">
                            <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                        </div>

                        <div className="col mt-2">
                            <span>If you don't have profile <Link to="/register" className="text-success">sign-up here</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default memo(Login);