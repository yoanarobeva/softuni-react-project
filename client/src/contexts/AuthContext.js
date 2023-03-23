import { createContext } from "react";
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import * as authService from '../services/authService';
// import { owners } from '../utils/ownersUtil';

export const AuthContext = createContext();

// export const AuthProvider = ({
//     children,
// }) => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState({});

//     const isOwner = owners.includes(user._id);
    
//     const onLogin = async (values) => {
//         const newUser = await authService.login(user.accessToken, values);
//         setUser(newUser);
    
//         navigate('/catalog');
//     };
    
//     const onLogout = async () => {
//         await authService.logout(user.accessToken);
//         setUser({});
//     };
    
//     const onRegister = async (values) => {
//         const { repeatPassword, ...registerData } = values;
    
//         if (repeatPassword !== registerData.password) {
//             return alert("Passwords dont match!");
//         }
        
//         const newUser = await authService.register(user.accessToken, registerData);
//         setUser(newUser);
        
//         navigate('/catalog');
//     };

//     const authContextValues = {
//         onLogin,
//         onLogout,
//         onRegister,
//         isOwner,
//         userId: user._id,
//         token: user.accessToken,
//         userEmail: user.email,
//         isAuthenticated: !!user.accessToken,
//     }
    
//     return (
//         <>
//             <AuthContext.Provider value={authContextValues}>
//                 {children}
//             </AuthContext.Provider>
//         </>
//     );
// };