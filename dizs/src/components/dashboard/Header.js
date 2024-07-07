import React from 'react'

const Header = () => {
    return (
        <div className='dashboard-header d-flex flex-wrap align-items-center justify-content-space-between'>
            <div className='title'>
                <h6>All Student List</h6>
            </div>
            <div className='add-record'>
                <button type="submit">+ Add Student</button>
            </div>
        </div>
    )
}

export default Header
