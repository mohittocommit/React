import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    return (
        <div className='page-login page'>
            <section className='login-section'>
                <div className='container'>
                    <div className='login-inner'>
                        <div className='login-box'>
                            <h2>Login</h2>
                            <form>
                                <div class="form-group">
                                    <label for="username">Username:</label>
                                    <input type="text" id="username" name="username" required />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <input type="password" id="password" name="password" required />
                                </div>
                                <div class="form-group forgot-password-link">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>
                                <div class="form-group">
                                    <button type="submit">Login</button>
                                </div>
                                
                                <div class="form-group signup-link">
                                    Don't have an account? <Link to="/signup">Sign up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
