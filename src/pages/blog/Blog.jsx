import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';

const Blog = () => {
    const { t } = useTranslation();
    return (
        <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <NavBox name={t('articles')} to={'/blog/articles'} />
            <NavBox name={t('lessons')} to={'/blog/vid-lessons'} />
            <NavBox name={t('profesiograma')} to={'/blog/profesiograma'} />
            <NavBox name={t('calendar')} to={'/blog/calendar'} />
            <NavBox name={t('classification')} to={'/blog/classification'} />
            <NavBox name={t('researches')} to={'/blog/researches'} />
        </div>
    )
}

export default Blog