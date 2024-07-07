import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { loginUser } from "../services/apiService";
import useApiHandler from '../hooks/useApihandler';
import { useUser } from "../context/useContext";
import Input from '../components/form/Input';
import { validateMobile, validatePassword } from '../utils/validation';

const Login = () => {
    const { handleApiCall } = useApiHandler();
    const { userData, setUserData } = useUser();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        mobile: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        mobile: "",
        password: ""
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const {name, value} =  e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleKeyUp = () => {
        validateFields();
    };
    const validateFields = () => {
        const newErrors = {
            mobile: validateMobile(formData.mobile) ? "" : "Invalid mobile number",
            password: validatePassword(formData.password) ? "" : "Password must be at least 4 characters"
        };
        setErrors(newErrors);

        setIsFormValid(!newErrors.mobile && !newErrors.password);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const payload = {
            d20: "123",
            d1: formData.mobile,
            d2: formData.password,
            d3: "web"
        };
        const result = await handleApiCall(
            () => loginUser(payload),
            async (response) => {
                if (response.status) {
                    setUserData(response.data); // Update user data in context if needed
                    localStorage.setItem('token',"iuhgihj")
                    navigate("/dashboard")
                    // Redirect to dashboard or handle success scenario
                } else {
                    console.error("Login failed");
                    // Handle error scenario if needed
                }
            },
            null
        );
    };

    return (
        <div className='page-login page'>
            <section className='login-section'>
                <div className='login-inner d-flex flex-wrap align-items-center'>
                    <div className='login-left'>
                        <div className='login-box'>
                            <h2>Sign In</h2>
                            <h6>Enter your Mobile and Password to Sign In.</h6>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile Number- User ID</label>
                                    <Input
                                        type="text"
                                        name="mobile"
                                        placeholder="Enter Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        onKeyUp={handleKeyUp}
                                        required
                                    />
                                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        value={formData.password}
                                        onChange={handleChange}
                                        onKeyUp={handleKeyUp}
                                        required
                                    />
                                    {errors.password && <span className="error">{errors.password}</span>}
                                </div>
                                <div className="form-group forgot-password-link">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>
                                <div className="form-group">
                                    <button type="submit" disabled={!isFormValid}>Login</button>
                                </div>
                                <div className="form-group signup-link">
                                    Don't have an account? <Link to="/signup">Sign up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='login-right'>
                        <img src="assets/images/pattern.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;
