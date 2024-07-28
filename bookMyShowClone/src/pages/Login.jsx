import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { showToast } from '../utils/toast'


const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
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
        const payload = {
            email: formData.email,
            password: formData.password,
        }
        try {
            const response = await axios.post(`http://localhost:9001/api/login`,payload)
            if (response) {
                await localStorage.setItem("email", payload.email);
                await localStorage.setItem("token", response.data.token);
                showToast('Login Successfully!', 'success');
                navigate("/profile");
            }
        } catch (error) {
            showToast(error?.response?.data?.message, 'error');
        }
    }
    return (
        <>
            <div className='page-login page'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-4">Login</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">  
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} />
                                        </div>
                                        <div className="mb-3 text-end">
                                            <Link to="/forgot-password">Forgot Password</Link>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Login</button>
                                    </form>
                                </div>
                            </div>
                            <p className="text-center mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
