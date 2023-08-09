import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './mainpage.scss'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';

const numOfSlides = [0, 1, 2, 3, 4, 5];
const MainPage = () => {
  const numberOfProgrammes = 7;
  const { t } = useTranslation();
  const menuItems = [
    { id: 1, number: 2, title: 'companies' },
    { id: 2, number: 21, title: 'seekers' },
    { id: 3, number: 132, title: 'alreadyWorks' },
    { id: 4, number: 2333, title: 'adviceTaken' },
    { id: 5, number: 2222, title: 'activePlaces' }
  ];
  return (
    <div className='mainPage_wrapper'>
      <Carousel interval={1500} className='carousel_main'>
        {numOfSlides.map((slide) => (
          <Carousel.Item key={slide}>
            <img
              className="d-block w-100"
              src="http://31.146.208.130:2007/ImageHandler.ashx?file=Portal\Slider\samsuhao-ojaxshi.gif"
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container style={{ display: 'flex', justifyContent: 'flex-end' }} className='owl_container'>
        <div className="col-md-3 owl_wrapper">
          <Carousel interval={1500} className='owl w-100' variant='dark' touch={true} controls={false}   >
            {menuItems.map((item) => (
              <Carousel.Item key={item.id} className='text-center'>
                <p>{t(`${item.title}`)}</p>
                <h4><span>{item.number}</span></h4>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
      <Container className='w-100 ed-programmes'>
        <h2>{t('statements')}</h2>
        <hr />
        <div>
          <button>
            <span>{t('educationalProgrammes')}</span><span className='ed-programmes-count'>{numberOfProgrammes}</span>
          </button>
        </div>
      </Container>
      <Container className='news_container'>
        <div className='news_heading'>
          <h2>{t('news')}</h2>
          <button className='news-btn'><Link to={'/'}>{t('news')}</Link></button>
        </div>

        <hr />
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={5}
          spaceBetween={30}

          className="news-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // when window width is >= 480px
            1000: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item}>
              <div className='news_card'>
                <img src="https://picsum.photos/id/237/200/150" alt="..." />
                <div>
                  <p>Lorem ipsum dolor impedit, vero eius, sit deserunt ratione eligendi</p>
                  <p>20.05</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Container style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative'}} className='mt-5'>
        <h2 style={{position:'absolute', top:0, left:10}}>{t('partners')}</h2>
        <hr className='w-100 mt-5'/>
        <div className='col-md-9 text-center m-0 p-0 ' style={{display:'flex', justifyContent:'center', margin:'0px'}}>
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
            <SwiperSlide><img src="https://academy.edu.ge/assets/img/logo.png" alt="cyberacademy"  /></SwiperSlide>
            <SwiperSlide><img src="https://gita.gov.ge/_nuxt/img/colored_ka.aee0290.png" alt="techpark" /></SwiperSlide>
          </Swiper>
        </div>

      </Container>
    </div >
  )
}
//{t('report')}
export default MainPage