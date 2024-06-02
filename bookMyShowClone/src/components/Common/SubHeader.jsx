import React from 'react'
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <>
      <div className="sub-header">
        <div className='container'>
            <div className="row">
                <ul>
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/pages/counter">Counter</Link></li>
                    <li><Link to="pages/todo">To Do</Link></li>
                    <li><Link to="pages/blog">Blog</Link></li>
                    <li><Link to="pages/githubusers">Github Users</Link></li>
                    <li><Link to="/pages/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default SubHeader
