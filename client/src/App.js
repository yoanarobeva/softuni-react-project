import { Routes, Route } from 'react-router-dom';

import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { Search } from './components/Search';
import { HomePage } from "./components/HomePage/HomePage";
import { AboutPage } from './components/AboutPage/AboutPage';
import { ContactPage } from './components/ContactPage/ContactPage';
import { Footer } from "./components/Footer";
import { CatalogPage } from './components/CatalogPage/CatalogPage';

function App() {
  return (
    <>
      <TopHeader />

      <Header />

      <Routes>
        <Route path='*' element={<h1>404</h1>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* search is a modal and its not working that way, try another */}
        <Route path='/search' element={<Search />} /> 
        <Route path='/cart' element={<HomePage />} />
        <Route path='/auth' element={<HomePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
