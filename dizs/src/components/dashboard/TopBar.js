import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className='topbar d-flex flex-wrap align-items-center justify-content-space-between'>
            <div className='breadcrumbs'>
                <Link to="">Dashboard</Link>
                <span> / </span>
                <Link to="">Student List</Link>
            </div>
            <div className='topbar-right'>
                <button type="submit">Logout</button>
            </div>
        </div>
    )
}

export default TopBar
