import React from 'react'
import './_about.scss'
import { useTranslation } from 'react-i18next'
import NavBox from '../../ReusableComponents/navbox/NavBox';
const About = () => {
  const {t} = useTranslation();
  
  return (
    <div className='about_container'>
      <NavBox name={t('baseInfo')} to={'/about/baseInfo'} />
      <NavBox name={t('partners')} to={'/about/partners'}/>
      <NavBox name={t('structure')} to={'/about/structure'}/>
      <NavBox name={t('stats')} to={'/about/statistics'}/>
    </div>
  )
}

export default About