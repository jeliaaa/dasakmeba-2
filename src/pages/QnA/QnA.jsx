import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';

const QnA = () => {
    const { t } = useTranslation();
    return (
        <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <NavBox name={t('guide')} to={'/qA/guide'} />
        </div>
    )
}

export default QnA