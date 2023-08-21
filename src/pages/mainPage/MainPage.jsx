import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './mainpage.scss'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const MainPage = () => {
  const { t } = useTranslation();
  const HeroBox = ({ heading }) => {
    return (
      <div className='hero_box'>
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3>{heading}</h3>
          <p>Lorem consequuntur rerum quisquam, fuga cupiditate nisi, numquam voluptate! Provident magni earum consequatur nihil quo.</p>
          <button type='button'>View More</button>
        </div>
        <img src="https://picsum.photos/100/100" alt="..." />
      </div>
    )
  }
  return (
    <div className='mainPage_wrapper' >
      <Row  >
        <Col xs={12} md={7} style={{paddingLeft: 0}} className='swiper_col'>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2000
            }}
            className="news-swiper"
          >
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col xs={6} md={5} className='vacancy_hero_col'>
          <HeroBox heading={t('vacancy')} />
        </Col>
      </Row>
      <Row className='justify-content-around mt-2' >
        <Col xs={12} md={6} className='vacancy_hero_col' style={{paddingLeft: 0}}>
          <HeroBox heading={t('news')} />
        </Col>
        <Col xs={12} md={6} className='vacancy_hero_col'>
          <HeroBox heading={t('projects')} />
        </Col>
      </Row>

    </div >
  )
}
export default MainPage