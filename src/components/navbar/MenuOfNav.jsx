import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Brand from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useTranslation } from 'react-i18next';
const MenuOfNav = () => {
    const { t, i18n } = useTranslation();
    const [val, setVal] = useState('');
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        setVal(e.target.value)
    };

    return (
        <div className='navBar'>
            <Navbar expand={'xxl'} className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand className='brand'>
                        <Link to={'/'}  >
                            <img src={Brand} alt='logo' />
                            <span>აჭარის დასაქმების სააგენტო</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xlg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center offcanvas_div" style={{ gap: '20px' }}>
                                <NavDropdown
                                    title={t('about')}
                                    drop='down-centered'
                                    id={`offcanvasNavbarDropdown-expand-lg`}

                                >
                                    <ul id='agency'>
                                        <Dropdown.Header>{t('agency')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/about/agency/baseInfo'}>{t('baseInfo')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/about/agency/brand'}>{t('brand')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/about/agency/structure'}>{t('structure')}</Link></Dropdown.Item>
                                    </ul>


                                    <ul>
                                        <Dropdown.Header>{t('gallery')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/about/gallery/photoGallery'}>{t('photoGallery')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/about/gallery/videoGallery'}>{t('videoGallery')}</Link></Dropdown.Item>
                                    </ul>
                                    <ul>
                                        <Dropdown.Header>{t('news')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/about/news/news'}>{t('news')}</Link></Dropdown.Item>
                                    </ul>
                                    <ul>
                                        <Dropdown.Header>{t('partners')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/about/partners/internationally'}>{t('internationally')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/about/partners/ourPartners'}>{t('ourPartners')}</Link></Dropdown.Item>
                                    </ul>
                                    <ul>
                                        <Dropdown.Header>{t('projects')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/about/projects/projects'}>{t('projects')}</Link></Dropdown.Item>
                                    </ul>
                                    <ul>
                                        <Dropdown.Header>{t('stats')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/about/stats/data'}>{t('data')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/about/stats/brandStats'}>{t('brandStats')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/about/stats/researches'}>{t('researches')}</Link></Dropdown.Item>
                                    </ul>
                                </NavDropdown>
                                <NavDropdown
                                    title={t('ourServices')}
                                    drop='down-centered'
                                    id={`offcanvasNavbarDropdown-expand-lg`}

                                >
                                    <ul>
                                        <Dropdown.Header>{t('detailedServices')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/ourServices/ourServices/hrServices'}>{t('hrServices')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/ourServices/ourServices/seekerServices'}>{t('seekerServices')}</Link></Dropdown.Item>
                                    </ul>


                                    <ul>
                                        <Dropdown.Header>{t('services')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/ourServices/services/organisations'}>{t('organisations')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/ourServices/services/jobSeekers'}>{t('jobSeekers')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/ourServices/services/grants'}>{t('grants')}</Link></Dropdown.Item>
                                    </ul>
                                    <ul>
                                        <Dropdown.Header>{t('jobsAbroad')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/ourServices/jobsAbroad/migration'}>{t('migration')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/ourServices/jobsAbroad/workAbroad'}>{t('workAbroad')}</Link></Dropdown.Item>
                                    </ul>
                                </NavDropdown>
                                <NavDropdown
                                    title={t('career')}
                                    drop='down-centered'
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                >
                                    <ul>
                                        <Dropdown.Header>{t('blog')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/career/blog/articles'}>{t('articles')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/career/blog/lessons'}>{t('lessons')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/career/blog/elbooks'}>{t('elbooks')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/career/blog/career'}>{t('career')}</Link></Dropdown.Item>
                                    </ul>
                                    <ul>
                                        <Dropdown.Header>{t('profAtlas')}</Dropdown.Header>
                                        <Dropdown.Divider></Dropdown.Divider>
                                        <Dropdown.Item><Link to={'/career/profAtlas/profesiograma'}>{t('profesiograma')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/career/profAtlas/advices'}>{t('advices')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/career/profAtlas/classification'}>{t('classification')}</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to={'/career/profAtlas/calendar'}>{t('calendar')}</Link></Dropdown.Item>
                                    </ul>


                                </NavDropdown>
                                <NavDropdown
                                    title={t('guide')}
                                    drop='down-centered'
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                >
                                    <NavDropdown.Item><Link to={'/guide/guide'}>{t('guide')}</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to={'/guide/structure'}>{t('structure')}</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to={'/guide/qA'}>{t('qA')}</Link></NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item className='nav-item-single'><Link className='not-a' to={'/contacts'}>{t('contacts')}</Link></Nav.Item>
                                <Nav.Item className='nav-item-single'><Link className='not-a' to={'/pubInfo'}>{t('pubInfo')}</Link></Nav.Item>

                                <div className="sign_up" style={{ display: "flex" }}>
                                    <button>Sign In</button>
                                    <button>Register</button>
                                </div>

                                <select value={val} onChange={changeLanguage} className='lang_change'>
                                    <option value="ge">GE</option>
                                    <option value="en">EN</option>
                                </select>
                            </Nav>

                        </Offcanvas.Body>

                    </Navbar.Offcanvas>

                </Container>

            </Navbar>

        </div >
    )
}
export default MenuOfNav;
