import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as designsService from './services/designsService';
import * as cartService from './services/cartService';
import * as lovesService from './services/lovesService';

import { DesignsContext, SetDesignsContext } from './contexts/DesignsContext';
import { CartContext, SetCartContext } from './contexts/CartContext';
import { LovesContext, SetLovesContext } from './contexts/LovesContext';
import { AuthContext, SetAuthContext } from './contexts/AuthContext';

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


function App() {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
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
    }, [user]);

    useEffect(() => {
        if (user._id) {
            lovesService.getOwnLoves(user._id)
                .then(result => {
                    if(result) {
                        setLoves(result);
                    }
                })
        }
    }, [user])

    const onCreateDesignSubmit = async (data) => {
        // !!! Will work after authorization is added!!!
        const newDesign = await designsService.create(data);

        setDesigns(state => [...state, newDesign]);

        navigate('/catalog');
    };

    return (
        <>
            <TopHeader />

            <AuthContext.Provider value={user}>
                <SetAuthContext.Provider value={setUser}>

                    <DesignsContext.Provider value={designs}>
                        <SetDesignsContext.Provider value={setDesigns}>

                            <CartContext.Provider value={cart}>
                                <SetCartContext.Provider value={setCart}>

                                    <LovesContext.Provider value={loves}>
                                        <SetLovesContext.Provider value={setLoves}>

                                            <Header/>

                                            <Search />

                                            <Routes>
                                                <Route path='*' element={<h1>404</h1>} />
                                                <Route path='/' element={<Home />} />
                                                <Route path='/about' element={<About />} />
                                                <Route path='/catalog' element={<Catalog />} />
                                                <Route path='/create' element={<CreateDesign onCreateDesignSubmit={onCreateDesignSubmit} />} />
                                                <Route path='/contact' element={<Contact />} />
                                                <Route path='/details/:designId' element={<Details/>} />
                                                <Route path='/cart' element={<Cart />} />
                                                <Route path='/profile' element={<Profile />} />
                                                <Route path='/login' element={<Login />} />
                                                <Route path='/register' element={<Register />} />
                                            </Routes>
                                            
                                        </SetLovesContext.Provider>
                                    </LovesContext.Provider>

                                </SetCartContext.Provider>
                            </CartContext.Provider>

                        </SetDesignsContext.Provider>
                    </DesignsContext.Provider>

                </SetAuthContext.Provider>
            </AuthContext.Provider>


            <Footer />
        </>
    );
}

export default App;
