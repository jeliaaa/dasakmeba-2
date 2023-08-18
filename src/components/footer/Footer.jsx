import React from 'react'
import './footer.scss'
import logo from '../../assets/footer_logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    const socials = [
        { id: 1, name: 'facebook', link: 'https://facebook.com' },
        { id: 2, name: 'instagram', link: 'https://instagram.com' },
        { id: 3, name: 'linkedin', link: 'https://linkedin.com' }
    ]
    return (
        <footer>
            <div className='col-md-4 brand'>
                <img src={logo} alt='HR' />
            </div>
            <div className='col-md-4 rights'>
                <p>All rights reserved &copy;</p>
                <h6>hralek@gmail.com</h6>
            </div>
            <div className="col-md-4 socials">
                {socials.map((social) => (
                    <Link key={social.id} to={social.link}>
                        <i className={`fa-brands fa-${social.name} fa-2xl `}></i>
                    </Link>

                ))}
            </div>
        </footer>
    )
}

export default Footer