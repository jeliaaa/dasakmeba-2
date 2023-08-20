import React from 'react'
import { Link } from 'react-router-dom'
import './navbox.scss'
const NavBox = ({ name, to }) => {
    return (
        <div className="nav-box">
            <Link to={to}><h3>{name}</h3></Link>
            <h3>{name}</h3>
        </div>
    )
}

export default React.memo(NavBox)