import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/MenuBook';
import { useScroll } from '../../scrollContext';
import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/base';

const MenuOfNav = (props) => {

    const { t, i18n } = useTranslation();
    const [val, setVal] = useState('');
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
            <Toolbar>
                <Typography>{t('menu')}</Typography>
            </Toolbar>
            <Divider />
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
                            <List id='agency'>
                                <h6>{t('agency')}</h6>
                                <Divider />
                                <ListItem><Link to={'/about/agency/baseInfo'}>{t('baseInfo')}</Link></ListItem>
                                <ListItem><Link to={'/about/agency/brand'}>{t('brand')}</Link></ListItem>
                                <ListItem><Link to={'/about/agency/structure'}>{t('structure')}</Link></ListItem>
                            </List>
                            <List>
                                <h6>{t('gallery')}</h6>
                                <Divider></Divider>
                                <ListItem><Link to={'/about/gallery/photoGallery'}>{t('photoGallery')}</Link></ListItem>
                                <ListItem><Link to={'/about/gallery/videoGallery'}>{t('videoGallery')}</Link></ListItem>
                            </List>
                            <List>
                                <h6>{t('news')}</h6>
                                <Divider></Divider>
                                <ListItem><Link to={'/about/news/news'}>{t('news')}</Link></ListItem>
                            </List>
                            <List>
                                <h6>{t('partners')}</h6>
                                <Divider></Divider>
                                <ListItem><Link to={'/about/partners/internationally'}>{t('internationally')}</Link></ListItem>
                                <ListItem><Link to={'/about/partners/ourPartners'}>{t('ourPartners')}</Link></ListItem>
                            </List>
                            <List>
                                <h6>{t('projects')}</h6>
                                <Divider></Divider>
                                <ListItem><Link to={'/about/projects/projects'}>{t('projects')}</Link></ListItem>
                            </List>
                            <List>
                                <h6>{t('stats')}</h6>
                                <Divider></Divider>
                                <ListItem><Link to={'/about/stats/data'}>{t('data')}</Link></ListItem>
                                <ListItem><Link to={'/about/stats/brandStats'}>{t('brandStats')}</Link></ListItem>
                                <ListItem><Link to={'/about/stats/researches'}>{t('researches')}</Link></ListItem>
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
                        <Typography>{t('ourServices')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <h6>{t('detailedServices')}</h6>
                            <Divider></Divider>
                            <ListItem><Link to={'/ourServices/ourServices/hrServices'}>{t('hrServices')}</Link></ListItem>
                            <ListItem><Link to={'/ourServices/ourServices/seekerServices'}>{t('seekerServices')}</Link></ListItem>
                        </List>


                        <List>
                            <h6>{t('services')}</h6>
                            <Divider></Divider>
                            <ListItem><Link to={'/ourServices/services/organisations'}>{t('organisations')}</Link></ListItem>
                            <ListItem><Link to={'/ourServices/services/jobSeekers'}>{t('jobSeekers')}</Link></ListItem>
                            <ListItem><Link to={'/ourServices/services/grants'}>{t('grants')}</Link></ListItem>
                        </List>
                        <List>
                            <h6>{t('jobsAbroad')}</h6>
                            <Divider></Divider>
                            <ListItem><Link to={'/ourServices/jobsAbroad/migration'}>{t('migration')}</Link></ListItem>
                            <ListItem><Link to={'/ourServices/jobsAbroad/workAbroad'}>{t('workAbroad')}</Link></ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accord'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{t('career')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <h6>{t('blog')}</h6>
                            <Divider></Divider>
                            <ListItem><Link to={'/career/blog/articles'}>{t('articles')}</Link></ListItem>
                            <ListItem><Link to={'/career/blog/lessons'}>{t('lessons')}</Link></ListItem>
                            <ListItem><Link to={'/career/blog/elbooks'}>{t('elbooks')}</Link></ListItem>
                            <ListItem><Link to={'/career/blog/career'}>{t('career')}</Link></ListItem>
                        </List>
                        <List>
                            <h6>{t('profAtlas')}</h6>
                            <Divider></Divider>
                            <ListItem><Link to={'/career/profAtlas/profesiograma'}>{t('profesiograma')}</Link></ListItem>
                            <ListItem><Link to={'/career/profAtlas/advices'}>{t('advices')}</Link></ListItem>
                            <ListItem><Link to={'/career/profAtlas/classification'}>{t('classification')}</Link></ListItem>
                            <ListItem><Link to={'/career/profAtlas/calendar'}>{t('calendar')}</Link></ListItem>
                        </List>
                    </AccordionDetails>
                    <Accordion className='accord'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{t('guide')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem><Link to={'/guide/guide'}>{t('guide')}</Link></ListItem>
                                <ListItem><Link to={'/guide/structure'}>{t('structure')}</Link></ListItem>
                                <ListItem><Link to={'/guide/qA'}>{t('qA')}</Link></ListItem>
                            </List>

                        </AccordionDetails>
                    </Accordion>
                </Accordion>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>{t('contacts')}</ListItemText>
                    </ListItemButton>
                </ListItem>
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '20vw', marginLeft: '50px', height: '70vh', borderRadius: '15px', marginTop: '0px', position: 'fixed' },
                }}
                open
            >
                {drawer}
            </Drawer> : <Drawer
                variant="permanent"
                sx={{
                    md: { display: 'none' },
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '20vw', marginLeft: '50px', height: '75vh', borderRadius: '15px', marginTop: '100px', position: 'absolute' },
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
                    <MenuIcon />
                </IconButton>
                <Navbar.Brand className='brand'>
                    <Link to={'/'}  >
                        <img src={Brand} alt='logo' />
                        <span>აჭარის დასაქმების სააგენტო</span>
                    </Link>
                </Navbar.Brand>
                <section>
                    <div className="sign_up" style={{ display: "flex" }}>
                        <button className='sign_btn'>Sign In</button>
                        <button className='sign_btn'>Register</button>
                        <div className='sign_acc'>
                            <Dropdown>
                                <MenuButton>Acc</MenuButton>
                                <Menu style={{ border: '1px solid black', borderRadius: '5px', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                    <button>Sign In</button>
                                    <button>Register</button>
                                </Menu>
                            </Dropdown>
                        </div>




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
