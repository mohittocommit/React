import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

// Example of a fake authentication check function
const isAuthenticated = () => {
  // Implement your authentication logic here
  return localStorage.getItem('token'); // Example: check if token exists in localStorage
};

// Private route wrapper component
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more private routes as needed */}
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
