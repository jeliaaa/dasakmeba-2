import React, { useState } from 'react'
import { Breadcrumb, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'
import { useTranslation } from 'react-i18next'
import breadcrNavData from './breadcrNav.json'
const Breadcrumbs = ({ forbread }) => {
    const { t } = useTranslation();
    var p = window.location.pathname;
    var crumbs = p.split('/');
    crumbs.splice(0, 1);
    if (crumbs.length === 5) {
        crumbs.splice(4, 1)
    }
    var crumbsOfLink = [...crumbs];
    crumbsOfLink.splice(2, 1);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const arrayFromObject = Object.keys(breadcrNavData).map(key => breadcrNavData[key]);
    const crumb = arrayFromObject[forbread]
    return (
        <>
            <Breadcrumb>
                <Link to={'/'}>{t('main')} /</Link>
                {crumbs.map((crumb, index) => (
                    crumbs.length >= 3 && index === 1 ? (
                        <Breadcrumb.Item active onClick={handleShow} key={index} className='nav-crumb'>
                            {t(crumb)}
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item active key={index}>
                            {t(crumb)}
                        </Breadcrumb.Item>
                    )
                ))}
            </Breadcrumb>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{ }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {crumb.map((item, index) => (
                            <Link key={index} onClick={handleClose} to={item[`link${index + 1}`]}>{t(item[`text${index + 1}`])}</Link>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Breadcrumbs