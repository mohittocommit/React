import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { showToast } from '../utils/toast'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = new URLSearchParams(formData).toString();
        try {
            const response = await axios.post(`http://localhost:9001/api/register?${query}`)
            if (response) {
                showToast('User Registered Successfully!', 'success');
            }
        } catch (error) {
            showToast('Some Error Occured!', 'error');
            console.log(error)
        }
    }
    return (
        <div className='page-signup page'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Sign Up</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter your full name" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter your email" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="phone" className="form-label">Phone</label>
                                        <input type="phone" className="form-control" name="phone" placeholder="Enter your phone" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="Create a password" onChange={handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                                </form>
                            </div>
                        </div>
                        <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
