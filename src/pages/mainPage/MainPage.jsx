import React from 'react'
import { Container } from 'react-bootstrap'
import './mainpage.scss'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className='mainPage_wrapper' style={{ backgroundColor: '#fff' }}>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={30}
        className="news-swiper"
      >
        {[1, 2].map((item) => (
          <SwiperSlide key={item}>
          </SwiperSlide>
        ))}
      </Swiper>

      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }} className='mt-5'>
        <h2 style={{ position: 'absolute', top: 0, left: 10 }}>{t('partners')}</h2>
        <hr className='w-100 mt-5' />
        <div className='col-md-9 text-center m-0 p-0 ' style={{ display: 'flex', justifyContent: 'center', margin: '0px' }}>
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="partners-swiper"
          >
            <SwiperSlide><img src="https://academy.edu.ge/assets/img/logo.png" alt="cyberacademy" /></SwiperSlide>
            <SwiperSlide><img src="https://gita.gov.ge/_nuxt/img/colored_ka.aee0290.png" alt="techpark" /></SwiperSlide>
          </Swiper>
        </div>

      </Container>

    </div >
  )
}
export default MainPage