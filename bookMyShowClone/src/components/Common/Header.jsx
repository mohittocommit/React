import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const userEmail = localStorage.getItem("email")
  const loginNavigate = useNavigate();
  const handleLoginNavigate = () => {
    loginNavigate("/login")
  }
  const handleSignOut = async () => {
    await localStorage.clear();
    loginNavigate("/login")
  }
  return (
    <>
      <header className='pt-4 pb-4'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/">
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" className='logo' />
              </Link>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder='Search for Movies' />
            </div>
            <div className="col-md-3">
              {
                userEmail ?
                  <button type="button" className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
                  :
                  <button type="button" className="btn btn-danger" onClick={handleLoginNavigate}>Sign In</button>
              }
              <button type="button" className="btn btn-dark ms-1" onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
