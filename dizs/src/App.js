import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <BrowserRouter>
      <>
        <PublicRoutes />
        <PrivateRoutes />
      </>
    </BrowserRouter>
  );
}

export default App;
