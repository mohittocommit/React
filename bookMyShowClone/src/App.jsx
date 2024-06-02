import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "../src/app.scss";

// Common Components
import Header from './components/Common/Header';
import SubHeader from './components/Common/SubHeader';
import Footer from './components/Common/Footer';
// Routes
import Home from './pages/Home';
import Counter from './pages/Counter';
import ToDo from './pages/ToDo';
import Blog from './pages/blog/Blog';
import GitHubUsers from './pages/GitHubUsers';
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
            <Route path="/pages/todo" element={<ToDo />} />
            <Route path="pages/counter" element={<Counter />} />
            <Route path="pages/blog" element={<Blog />} />
            <Route path ="pages/githubusers" element={<GitHubUsers />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer  position="top-right" />
      </div>
    </>
  )
}

export default App
