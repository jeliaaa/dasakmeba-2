import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import './stats.scss'
const Stats = () => {
    return (
        <Swiper
            modules={[Autoplay, Mousewheel, Keyboard]}
            cssMode={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={4}
            spaceBetween={100}
            className="owl"
        >
            {[1, 2, 3, 4].map((item) => (
                <SwiperSlide key={item}>
                    <h1>12020</h1>
                    <h3>MEN</h3>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Stats