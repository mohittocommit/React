import React from 'react'
import { Outlet, Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <>
      <div className="sub-header">
        <div className='container'>
            <div className="row">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/pages/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default SubHeader
