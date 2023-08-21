import React from 'react'
import NavBox from '../../../ReusableComponents/navbox/NavBox'
import { useTranslation } from 'react-i18next'

const OurServices = () => {
  const {t} = useTranslation();
  return (
    <div className='services_wrapper' style={{display:'flex', justifyContent:'center', gap:'20px', flexWrap:'wrap'}}>
        <NavBox name={t('forOrg')} to={'/services/ourServices/forOrgs'} />
        <NavBox name={t('forUsers')} to={'/services/ourServices/forUsers'} />

      </div>
  )
}

export default OurServices