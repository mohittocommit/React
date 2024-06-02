import React, {useContext} from 'react'
import { ThemeProvider } from './context/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import "../src/app.scss";

import Navigation from './components/Common/Navigation';


const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </>
  )
}

export default App
