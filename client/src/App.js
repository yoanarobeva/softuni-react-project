import { Routes, Route } from 'react-router-dom';

import { DesignsProvider } from './contexts/DesignsContext';
import { CartProvider } from './contexts/CartContext';
import { LovesProvider } from './contexts/LovesContext';
import { AuthProvider } from './contexts/AuthContext';

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

    return (
        <>
            <TopHeader />

            <AuthProvider>

                <DesignsProvider>

                    <CartProvider>

                        <LovesProvider>

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

                        </LovesProvider>

                    </CartProvider>

                </DesignsProvider>

            </AuthProvider>

            <Footer />
        </>
    );
}

export default App;
