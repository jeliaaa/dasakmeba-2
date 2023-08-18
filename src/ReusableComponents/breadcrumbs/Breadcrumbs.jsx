import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './breadcrumbs.scss'
import { useTranslation } from 'react-i18next'
const Breadcrumbs = () => {
    const { t } = useTranslation();
    var p = window.location.pathname;
    var crumbs = p.split('/');
    crumbs.splice(0, 1);
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item><Link to={'/main'}>{t('main')}</Link></Breadcrumb.Item>
                {crumbs.map((crumb, index) => (
                    <Breadcrumb.Item active >
                        {index === 0 ? (<Link to={`/${crumb}`}>{t(crumb)}</Link>) : (t(crumb))}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </>
    )
}

export default Breadcrumbs