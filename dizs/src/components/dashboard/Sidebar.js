import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h5>Dizs Software</h5>
            <Link to="">Home</Link>
            <Link to="">Student List</Link>
        </div>
    )
}   

export default Sidebar
