import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/form/Input'

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
                                    <Input type="text" name="name" required/>
                                    <input  />
                                </div>
                                <div class="form-group">
                                    <label for="username">Email:</label>
                                    <Input type="email" name="email" required />
                                </div>
                                <div class="form-group">
                                    <label for="username">Phone:</label>
                                    <Input type="text" name="phone" required />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <Input type="password" name="password" required />
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
