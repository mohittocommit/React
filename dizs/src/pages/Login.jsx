import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import { loginUser } from "../services/apiService";
import useApiHandler from '../hooks/useApihandler';
import { useUser } from "../context/useContext";
import Input from '../components/form/Input';
import { validateMobile, validatePassword } from '../utils/validation';

const Login = () => {
    const { handleApiCall } = useApiHandler();
    const { userData, setUserData } = useUser();

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
    const validateFields = () => {
        const newErrors = {
            mobile: validateMobile(formData.mobile) ? "" : "Invalid mobile number",
            password: validatePassword(formData.password) ? "" : "Password must be at least 6 characters"
        };
        setErrors(newErrors);

        setIsFormValid(!newErrors.mobile && !newErrors.password);
    };

    useEffect(() => {
        validateFields();
    }, [formData]);
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const payload = {
            mobile: formData.mobile,
            password: formData.password
        };
        const result = await handleApiCall(
            () => loginUser(payload),
            async (response) => {
                if (response.status) {
                    setUserData(response.data); // Update user data in context if needed
                    console.log(response);
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
                                    <label htmlFor="email">Mobile Number- User ID</label>
                                    <Input
                                        type="text"
                                        name="mobile"
                                        placeholder="Enter Mobile Number"
                                        value={formData.email}
                                        onChange={handleChange}
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
