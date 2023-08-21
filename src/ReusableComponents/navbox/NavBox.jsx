import React from 'react'
import { Link } from 'react-router-dom'
import './navbox.scss'
const NavBox = ({ name, to }) => {
    return (
        <div className="nav-box">
            <div className='font-face-gm'>
                <Link to={to}><h3>{name}</h3></Link>
            </div>
        </div>
    )
}
export default NavBox