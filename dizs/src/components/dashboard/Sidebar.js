import React from 'react'
import { Link } from 'react-router-dom'
import { sideBarLinks } from '../../constants/constantData'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h5>Dizs Software</h5>
            {
                sideBarLinks.map((item,index)=> {
                    return (
                        <Link to={item.path}>{item.name}</Link>
                    )
                })
            }
        </div>
    )
}   

export default Sidebar
