import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="page-not-found page">
            <div className="container">
                <div className="row">
                    <div className="page-not-found-inner">
                        <div className="error-code">404</div>
                        <div className="error-message">Page Not Found</div>
                        <p className="mt-3">Oops! The page you are looking for might have been removed or is temporarily unavailable.</p>
                        <Link to="/" className="home-link mt-3">Go to Home</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NotFound
