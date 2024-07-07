import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='page-forgot-password page'>
            <section className='login-section'>
                <div className='container'>
                    <div className='login-inner'>
                        <div className='login-box'>
                            <h2>Recover Password</h2>
                            <form>
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div class="form-group">
                                    <button type="submit">Recover</button>
                                </div>
                                <div class="form-group signup-link">
                                    Remember your password? <Link to="/login">Log In</Link>
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