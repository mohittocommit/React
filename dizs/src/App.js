import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useApi } from './api';
import endPoints from './api/apiEndpoints';
import './App.css';
import { icons } from './utils/icons';

// Routes
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  // const getProfileData = async () => {
  //   const response = await useApi.profile();
  // }
  // const addBlog = async () => {
  //   const payload = {
  //     title: "blog 1"
  //   }
  //   const response = await useApi.create(endPoints.addBlog, payload);
  // }
  return (
    <>
      {/* <h1>App Component</h1>
      <img src={icons.logo} />
      <button onClick={getProfileData}></button> */}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
