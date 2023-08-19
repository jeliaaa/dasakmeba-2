import React, { useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss'
import { useTranslation } from 'react-i18next';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button, Col, Form, Modal, Nav, Row } from 'react-bootstrap';
const MenuOfNav = (props) => {
    const { t, i18n } = useTranslation();
    const [val, setVal] = useState('');
    const [show, setShow] = useState(false);
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        setVal(e.target.value)
    };
    const location = useLocation();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const navLink1 = useRef(null);
    const navLink2 = useRef(null);
    const navLink3 = useRef(null);
    const navLink4 = useRef(null);
    const navLink5 = useRef(null);
    const navLink6 = useRef(null);
    const navLink7 = useRef(null);
    const navLinks = [
        navLink1, navLink2, navLink3, navLink4, navLink5, navLink6, navLink7
    ]
    const handleMain = () =>{
        navLinks.forEach((navlink) => {
            navlink.current.classList.remove('active')
        })
    }
    if(location.pathname === '/main'){
        handleMain()
    }
    const handleChange = (e) => {
        navLinks.forEach((navlink) => {
            navlink.current.classList.remove('active')
        })
        e.target.classList.add('active')
    }
    const drawerWidth = 300;
    const drawer = (
        <div className='nav-side'>
                <List>
                    <ListItem><Link to={'/about'}>{t('about')}</Link></ListItem>
                    <ListItem><Link to={'/services'}>{t('services')}</Link></ListItem>
                    <ListItem><Link to={'/blog'}>{t('blog')}</Link></ListItem>
                    <ListItem><Link to={'/media'}>{t('media')}</Link></ListItem>
                    <ListItem><Link to={'/vacancy'}>{t('vacancy')}</Link></ListItem>
                    <ListItem><Link to={'/qA'}>{t('qA')}</Link></ListItem>
                    <ListItem><Link to={'/pubInfo'}>{t('pubInfo')}</Link></ListItem>
                </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className='nav_wrapper' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    sm: { display: 'block' },
                    md: { display: 'block' },
                    display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <div className='navBar'>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'block', lg: 'none' } }}
                >
                    <i className="fa-solid fa-bars"></i>
                </IconButton>
                <Navbar.Brand className='brand' onClick={handleMain}>
                    <Link to={'/main'}>
                        <img src={Brand} alt='logo' />
                    </Link>
                </Navbar.Brand>
                <span className='poor_sight'>
                    <i className='fa-solid fa-eye'></i>
                    <span>{t('versionForBlind')}</span>
                </span>
                <div className='search'>
                    <input type="text" placeholder='    &#9740;' />
                </div>
                <section>
                    <div className="sign_up" style={{ display: "flex" }}>
                        <Button variant="primary" onClick={() => setShow(true)}>
                            Sign in
                        </Button>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            className='sign_in_modal'
                        >
                            <Modal.Header closeButton className='text-center'>
                                <Modal.Title id="example-custom-modal-styling-title" className='text-center'>
                                    Sign in
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className='text-center'>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Email
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type='email' placeholder='Email' />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="2">
                                            Password
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Col>
                                    </Form.Group>
                                    <Link to={'/register'} className='text-center '>Register</Link>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <select value={val} onChange={changeLanguage} className='lang_change'>
                        <option value="ge">GE</option>
                        <option value="en">EN</option>
                    </select>
                </section>
            </div>
            <Nav justify variant="tabs" className='col-md-8'>
                <Nav.Item>
                    <Link ref={navLink1} className='nav-link' onClick={handleChange} to={'/about'}>{t('about')}</Link>
                </Nav.Item>
                <Nav.Item >
                    <Link ref={navLink2} onClick={handleChange} className='nav-link' to={'/services'}>{t('services')}</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link ref={navLink3} onClick={handleChange} className='nav-link' to={'/blog'}>{t('blog')}</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link ref={navLink4} onClick={handleChange} className='nav-link' to={'/about/agency/structure'} ac>{t('media')}</Link>
                </Nav.Item>
                <Nav.Item >
                    <Link ref={navLink5} onClick={handleChange} className='nav-link' to={'/about/agency/structure'}>{t('vacancy')}</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link ref={navLink6} onClick={handleChange} className='nav-link' to={'/about/agency/structure'}>{t('qA')}</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link ref={navLink7} onClick={handleChange} className='nav-link' to={'/about/agency/structure'}>{t('pubInfo')}</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default MenuOfNav;
