import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBox from '../../ReusableComponents/navbox/NavBox';

const Vacancy = () => {
    const { t } = useTranslation();
    return (
        <div className='services_wrapper' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <NavBox name={t('conference')} to={'/vacancy/conference'} />
            <NavBox name={t('employement')} to={'/vacancy/employement'} />
            <NavBox name={t('familyWork')} to={'/vacancy/familyWork'} />
            <NavBox name={t('internship')} to={'/vacancy/internship'} />
            <NavBox name={t('lectures')} to={'/vacancy/lectures'} />
            <NavBox name={t('professional')} to={'/vacancy/professional'} />
            <NavBox name={t('trainings')} to={'/vacancy/trainings'} />
            <NavBox name={t('volunteering')} to={'/vacancy/volunteering'} />
        </div>
    )
}

export default Vacancy