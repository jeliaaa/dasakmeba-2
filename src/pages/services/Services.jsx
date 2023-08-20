import React from 'react'
import NavBox from '../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'

const Services = () => {
    const {t} = useTranslation();
    return (
    <div className='services_wrapper' style={{display:'flex', justifyContent:'center', gap:'20px', flexWrap:'wrap'}}>
        <NavBox name={t('ourServices')} to={'/services/ourServices'} />
        <NavBox name={t('projects')} to={'/services/projects'} />
        <NavBox name={t('grants')} to={'/services/grants'} />
        <NavBox name={t('migration')} to={'/services/migration'} />
    </div>
  )
}

export default Services
