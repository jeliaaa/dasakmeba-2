import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useScroll } from '../../scrollContext';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const MenuOfNav = (props) => {

    const { t, i18n } = useTranslation();
    const [val, setVal] = useState('');
    const [show, setShow] = useState(false);

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        setVal(e.target.value)
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawerWidth = 300;
    const { scrollPosition } = useScroll();
    const isFixed = scrollPosition >= 150;
    const drawer = (
        <div className='nav-side'>
            <List>
                <Accordion className='accord'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{t('about')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <List>
                                <ListItem><Link to={'/about/agency/structure'}>{t('baseInfo')}</Link></ListItem>
                                <ListItem><Link to={'/about/partners'}>{t('partners')}</Link></ListItem>
                                <ListItem><Link to={'/about/structure'}>{t('structure')}</Link></ListItem>
                                <ListItem><Link to={'/about/statistics'}>{t('stats')}</Link></ListItem>
                            </List>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accord'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{t('services')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem><Link to={'/services/projects'}>{t('projects')}</Link></ListItem>
                            <ListItem><Link to={'/services/aboutServices'}>{t('aboutServices')}</Link></ListItem>
                            <ListItem><Link to={'/services/grants'}>{t('grants')}</Link></ListItem>
                            <ListItem><Link to={'/services/migration'}>{t('migration')}</Link></ListItem>
                        </List>

                    </AccordionDetails>
                </Accordion>
                <Accordion className='accord'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{t('blog')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem><Link to={'/blog/articles'}>{t('articles')}</Link></ListItem>
                            <ListItem><Link to={'/blog/lessons'}>{t('lessons')}</Link></ListItem>
                            <ListItem><Link to={'/blog/profesiograma'}>{t('profesiograma')}</Link></ListItem>
                            <ListItem><Link to={'/blog/classification'}>{t('classification')}</Link></ListItem>
                            <ListItem><Link to={'/blog/calendar'}>{t('calendar')}</Link></ListItem>
                            <ListItem><Link to={'/blog/researches'}>{t('researches')}</Link></ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accord'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{t('media')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem><Link to={'/media/news'}>{t('news')}</Link></ListItem>
                            <ListItem><Link to={'/media/gallery'}>{t('gallery')}</Link></ListItem>
                        </List>

                    </AccordionDetails>
                </Accordion>
                <Accordion className='accord'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{t('vacancy')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem><Link to={'/vacancy/employement'}>{t('employement')}</Link></ListItem>
                            <ListItem><Link to={'/vacancy/internship'}>{t('internship')}</Link></ListItem>
                            <ListItem><Link to={'/vacancy/volunteering'}>{t('volunteering')}</Link></ListItem>
                            <ListItem><Link to={'/vacancy/familyWork'}>{t('familyWork')}</Link></ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accord'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{t('qA')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem><Link to={'/qA/guide'}>{t('guide')}</Link></ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>{t('pubInfo')}</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box>
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
            {isFixed ? <Drawer
                variant="permanent"
                sx={{
                    md: { display: 'none' },
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '20vw', marginLeft: '50px', height: '50vh', borderRadius: '15px', marginTop: '0px', position: 'fixed', scrollbarWidth: '16px' },
                }}
                open
            >
                {drawer}
            </Drawer> : <Drawer
                variant="permanent"
                sx={{
                    md: { display: 'none' },
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '20vw', marginLeft: '50px', height: '75vh', borderRadius: '15px', marginTop: '150px', position: 'absolute' },
                }}
                open
            >
                {drawer}
            </Drawer>}


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
                <Navbar.Brand className='brand'>
                    <Link to={'/dasakmeba-1'}  >
                        <img src={Brand} alt='logo' />
                    </Link>
                </Navbar.Brand>
                <span className='poor_sight'>
                    <i className='fa-solid fa-eye'></i>
                    <span>{t('versionForBlind')}</span>
                </span>
                <div className='search'>
                    <input type="text" placeholder='&#9740;'/>
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
        </Box>

    )
}
export default MenuOfNav;
