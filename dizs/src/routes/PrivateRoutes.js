import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

// Example of a fake authentication check function
const isAuthenticated = () => {
  // Implement your authentication logic here
  return localStorage.getItem('token'); // Example: check if token exists in localStorage
};

// Private route component
const PrivateRoute = ({ element: Element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      {/* Add more private routes as needed */}
    </Routes>
  );
};

export default PrivateRoutes;
