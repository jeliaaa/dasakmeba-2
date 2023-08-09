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
        crumbs.splice(4,1)
    }
    var crumbsOfLink = [...crumbs];
    crumbsOfLink.splice(2, 1);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const findObjectInNestedObject = (obj, targetKey) => {
        if (obj[targetKey]) {
            return obj[targetKey];
        }

        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                const foundObject = findObjectInNestedObject(obj[key], targetKey);
                if (foundObject) {
                    return foundObject;
                }
            }
        }

        return null;
    };
    const targetObject = findObjectInNestedObject(breadcrNavData, `${forbread}`);

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item><Link to={'/'}>{t('main')}</Link></Breadcrumb.Item>
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
                    <Modal.Title>{t(`${forbread}`)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {targetObject.map((item, index) => (
                            <li key={index}>
                                <Link onClick={handleClose} to={item[`link${index + 1}`]}>{t(item[`text${index + 1}`])}</Link>
                            </li>
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