import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Banner = () => {

    const imageArray = [
        'https://i.ibb.co/LQYz6sC/Banner2.jpg',
        'https://i.ibb.co/4tb6rj5/Banner4.jpg',
        'https://i.ibb.co/QdKbXdt/Banner3.jpg',
        'https://i.ibb.co/GR3FyD6/Banner1.jpg'
    ]

    return (
        <section className='my-12'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                loop={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper p-3"
            >
                {
                    imageArray.map((e, idx) => <SwiperSlide className='w-fit' key={idx}><img className='w-[900px] h-[500px] rounded-xl mx-auto' src={e} alt="" /></SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Banner;