import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
    const { onRegister } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        repeatPassword: '',
    }, onRegister);

    const [errors, setErrors] = useState({
        requiredEmail: false,
        testEmail: false,
        requiredPassword: false,
        requiredRepeatPassword: false,
    });

    const onEmailBlur = () => {
        const rgx = /^(.+)@(.+)$/;

        if (values.email === "") {
            setErrors(state => ({...state, requiredEmail:true, testEmail: false}));
        } else  if (!rgx.test(values.email)) {
            setErrors(state => ({...state, requiredEmail:false, testEmail: true}));
        } else {
            setErrors(state => ({...state, requiredEmail: false, testEmail: false}));
        };
    }

    const onPasswordBlur = () => {
        if (values.password === "") {
            setErrors(state => ({...state, requiredPassword: true}));
        } else {
            setErrors(state => ({...state, requiredPassword: false}));
        }
    }

    const onRepeatPasswordBlur = () => {
        if (values.repeatPassword === "") {
            setErrors(state => ({...state, requiredRepeatPassword: true}));
        } else {
            setErrors(state => ({...state, requiredRepeatPassword: false}));
        }
    }

    return (
        <section className="section py-5">
            <div className="row py-5">
                <form id="register" className="col-md-9 m-auto" onSubmit={onSubmit}>
                    <div className="container">
                        <h1 className="h1">Register</h1>

                        <div className="col py-3">
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input 
                                    className="form-control mt-2" 
                                    type="email" 
                                    name="email" 
                                    placeholder="maria@email.com"
                                    onChange={changeHandler} 
                                    value={values.email}
                                    onBlur={onEmailBlur} 
                                />
                                {errors.requiredEmail && <span style={{color: "red"}}>This field is required</span>}
                                {errors.testEmail && <span style={{color: "red"}}>Enter valid email</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="pass">Password:</label>
                                <input 
                                    className="form-control mt-2" 
                                    type="password" 
                                    placeholder="******" 
                                    name="password" 
                                    onChange={changeHandler} 
                                    value={values.password}
                                    onBlur={onPasswordBlur} 
                                />
                                {errors.requiredPassword && <span style={{color: "red"}}>This field is required</span>}

                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="con-pass">Confirm Password:</label>
                                <input 
                                    className="form-control mt-2" 
                                    type="password" 
                                    placeholder="******" 
                                    name="repeatPassword" 
                                    onChange={changeHandler} 
                                    value={values.repeatPassword}
                                    onBlur={onRepeatPasswordBlur}
                                />
                                {errors.requiredRepeatPassword && <span style={{color: "red"}}>This field is required</span>} 
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