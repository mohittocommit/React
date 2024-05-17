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
import Counter from './pages/Counter';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ToDo from './pages/ToDo';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <SubHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/todo" element={<ToDo />} />
            <Route path="pages/counter" element={<Counter />} />
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
