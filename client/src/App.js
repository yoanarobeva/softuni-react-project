import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as authService from './services/authService';
import * as designsService from './services/designsService';
import * as cartService from './services/cartService';
import * as lovesService from './services/lovesService';

import { DesignsContext } from './contexts/DesignsContext';
import { CartContext } from './contexts/CartContext';
import { LovesContext } from './contexts/LovesContext';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { owners } from './utils/ownersUtil';

import { TopHeader } from "./components/TopHeader/TopHeader";
import { Header } from "./components/Header/Header";
import { Search } from './components/SearchModal/Search';
import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from "./components/Footer/Footer";
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Profile } from './components/Profile/Profile';
import { CreateDesign } from './components/CreateDesign/CreateDesign';
import { Cart } from './components/Cart/Cart';
import { Logout } from './components/Logout/Logout';

function App() {
    const navigate = useNavigate();

    const [user, setUser] = useLocalStorage("user", {});
    const [designs, setDesigns] = useState([]);
    const [cart, setCart] = useState([]);
    const [loves, setLoves] = useState([])
    
    useEffect(() => {
        designsService.getAll()
            .then(result => {
                setDesigns(result);
            })
    }, []);

    useEffect(() => {
        if (user._id) {
            cartService.getOwnCart(user._id)
                .then(result => {
                    setCart(result);
                })
        }
    }, [user._id]);

    useEffect(() => {
        if (user._id) {
            lovesService.getOwnLoves(user._id)
                .then(result => {
                    if (result) {
                        setLoves(result);
                    }
                })
        }
    }, [user._id]);

    const isOwner = owners.includes(user._id);

    const onCreateDesignSubmit = async (data) => {
        const newDesign = await designsService.create(data);

        setDesigns(state => [...state, newDesign]);

        navigate('/catalog');
    };

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
        }

        const newUser = await authService.register(user.accessToken, registerData);
        setUser(newUser);

        navigate('/catalog');
    };

    const authContextValues = {
        onLogin,
        onLogout,
        onRegister,
        isOwner,
        userId: user._id,
        token: user.accessToken,
        userEmail: user.email,
        isAuthenticated: !!user.accessToken,
    }

    const cartContextValues = {
        cart,
        setCart,
    }

    const lovesContextValues = {
        loves,
        setLoves,
    }

    const designContextValues = {
        designs,
        setDesigns,
        onCreateDesignSubmit,
    }

    return (
        <>
            <TopHeader />

            <AuthContext.Provider value={authContextValues}>

                <DesignsContext.Provider value={designContextValues}>

                    <CartContext.Provider value={cartContextValues}>

                        <LovesContext.Provider value={lovesContextValues}>

                            <Header />

                            <Search />

                            <Routes>
                                <Route path='*' element={<h1>404</h1>} />
                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/catalog' element={<Catalog />} />
                                <Route path='/create' element={<CreateDesign />} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='/details/:designId' element={<Details />} />
                                <Route path='/cart' element={<Cart />} />
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/logout' element={<Logout />} />
                            </Routes>

                        </LovesContext.Provider>

                    </CartContext.Provider>

                </DesignsContext.Provider>

            </AuthContext.Provider>

            <Footer />
        </>
    );
}

export default App;
