import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as designsService from './services/designsService';
import * as cartService from './services/cartService';

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
    const [designs, setDesigns] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        designsService.getAll()
            .then(result => {
                setDesigns(result);
            })
    }, []);
    
    useEffect(() => {
        cartService.getAll()
            .then(result => {
                setCart(result);
            })
    }, []);

    const onCreateDesignSubmit = async (data) => {
        // !!! Will work after authorization is added!!!
        const newDesign = await designsService.create(data);

        setDesigns(state => [...state, newDesign]);

        navigate('/catalog');
    };

    return (
        <>
            <TopHeader />

            <Header cart={cart}/>

            <Search />

            <Routes>
                <Route path='*' element={<h1>404</h1>} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog designs={designs}/>} />
                <Route path='/create' element={<CreateDesign onCreateDesignSubmit={onCreateDesignSubmit} />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/details/:designId' element={<Details setCart={setCart}/>} />
                <Route path='/cart' element={<Cart cart={cart} />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
