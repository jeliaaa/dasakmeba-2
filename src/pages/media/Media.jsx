import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';

const Media = () => {
    const { t } = useTranslation();
    return (
        <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <NavBox name={t('gallery')} to={'/media/gallery'} />
            <NavBox name={t('news')} to={'/media/news'} />
        </div>
    )
}

export default Media