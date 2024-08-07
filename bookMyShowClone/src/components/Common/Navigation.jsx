import React, {useContext} from 'react'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Common Components
import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
// Routes
import Home from '../../pages/Home';
import Counter from '../../pages/Counter';
import ToDo from '../../pages/ToDo';
import Blog from '../../pages/blog/Blog';
import BlogDetail from '../../pages/blog/BlogDetail';
import AddPost from '../../pages/admin/AddPost';
import GitHubUsers from '../../pages/GitHubUsers';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import Profile from '../../pages/Profile';
import ForgotPassword from '../../pages/ForgotPassword';
import NotFound from '../../pages/NotFound';


import ThemeContext from '../../context/ThemeContext';
import PublicRoute from '../Routes/PublicRoute';
import PrivateRoute from '../Routes/PrivateRoute';



const Navigation = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={theme === "light" ? "lightTheme" : "darkTheme"}>
                <BrowserRouter>
                    <Header />
                    <SubHeader />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pages/todo" element={<ToDo />} />
                        <Route path="pages/counter" element={<Counter />} />
                        <Route path="pages/blog" element={<Blog />} />
                        <Route path="posts/:id" element={<BlogDetail />} />
                        <Route path="pages/add-post" element={<PrivateRoute><AddPost /></PrivateRoute>} />
                        <Route path="pages/githubusers" element={<GitHubUsers />} />
                        <Route path="/pages/contact" element={<Contact />} />
                        <Route path="/login" element={<PublicRoute><Login /></PublicRoute> } />
                        <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="forgot-password" element={<ForgotPassword />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
                <ToastContainer position="top-right" />
            </div>
        </>
    )
}

export default Navigation
