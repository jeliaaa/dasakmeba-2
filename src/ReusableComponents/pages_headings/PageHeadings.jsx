import React from 'react'
import { useTranslation } from 'react-i18next'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import './PageHeading.scss'
const PageHeadings = ({ heading }) => {
    const { t } = useTranslation();
    return (
        <strong>
            <div>
                <h2>{t(heading)}</h2>
                <Breadcrumbs forbread={'agency'} />
            </div>
            <hr />
        </strong>
    )
}

export default PageHeadings