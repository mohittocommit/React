import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='page-signup page'>
            <section className='login-section'>
                <div className='container'>
                    <div className='login-inner'>
                        <div className='login-box'>
                            <h2>Sign Up</h2>
                            <form>
                                <div class="form-group">
                                    <label for="username">Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div class="form-group">
                                    <label for="username">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div class="form-group">
                                    <label for="username">Phone:</label>
                                    <input type="text" id="phone" name="phone" required />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <input type="password" id="password" name="password" required />
                                </div>
                                <div class="form-group">
                                    <button type="submit">Sign Up</button>
                                </div>
                                <div class="form-group signup-link">
                                    Already have an account? <Link to="/login">Log In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Signup
