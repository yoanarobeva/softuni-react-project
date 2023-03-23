import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import * as authService from '../services/authService';
import { admins } from '../utils/adminsUtil';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage("user",{});

    const isAdmin = Boolean(admins.includes(user._id));
    
    const onLogin = async (values) => {
        const newUser = await authService.login(values);
        setUser(newUser);
    
        navigate('/catalog');
    };
    
    const onLogout = async () => {
        await authService.logout();
        localStorage.clear();
        setUser({});
    };
    
    const onRegister = async (values) => {
        const { repeatPassword, ...registerData } = values;
        
        if (repeatPassword !== registerData.password) {
            return alert("Passwords dont match!");
        };
        
        const newUser = await authService.register(registerData);
        setUser(newUser);

        navigate('/catalog');
    };

    const authContextValues = {
        onLogin,
        onLogout,
        onRegister,
        isAdmin,
        userId: user._id,
        token: user.accessToken,
        userEmail: user.email,
        isAuthenticated: !!user.accessToken,
    }
    
    return (
        <>
            <AuthContext.Provider value={authContextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};