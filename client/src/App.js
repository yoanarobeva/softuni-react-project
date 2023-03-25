import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import DesignsProvider from './contexts/DesignsContext';
import CartProvider from './contexts/CartContext';
import LovesProvider from './contexts/LovesContext';

import Home  from "./components/Home/Home";
import About from './components/About/About';
import Search from './components/SearchModal/Search';
import Contact from './components/Contact/Contact';
import { TopHeader } from "./components/TopHeader/TopHeader";
import { Header } from "./components/Header/Header";
import { Catalog } from './components/Designs/Catalog/Catalog';
import { Details } from './components/Designs/Details/Details';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import Logout from './components/User/Logout/Logout';
import { Profile } from './components/Profile/Profile';
import { CreateDesign } from './components/Designs/CreateDesign/CreateDesign';
import { EditDesign } from './components/Designs/EditDesign/EditDesign';
import { Cart } from './components/Cart/Cart';
import { Footer } from "./components/Footer/Footer";
import { NotFound } from './components/NotFound/NotFound';

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
                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/catalog' element={<Catalog />} />
                                <Route path='/catalog/:category' element={<Catalog />} />
                                <Route path='/details/:designId' element={<Details />} />
                                <Route path='/details/:designId/edit' element={<EditDesign />} />
                                <Route path='/create' element={<CreateDesign />} />
                                <Route path='/cart' element={<Cart />} />
                                <Route path='/profile' element={<Profile />} />
                                <Route path='*' element={<NotFound />} />
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