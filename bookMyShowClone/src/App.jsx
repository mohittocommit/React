import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "../src/app.scss";

// Common Components
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
// Routes
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <SubHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
