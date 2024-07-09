import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/form/Input'

const ForgotPassword = () => {
  return (
    <div className='page-forgot-password page'>
            <section className='login-section'>
                <div className='container'>
                    <div className='login-inner'>
                        <div className='login-box'>
                            <h2>Recover Password</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <Input type="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <button type="submit">Recover</button>
                                </div>
                                <div className="form-group signup-link">
                                    Remember your password? <Link to="/">Log In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default ForgotPassword
