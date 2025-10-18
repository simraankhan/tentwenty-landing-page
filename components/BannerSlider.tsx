"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'


import 'swiper/css';
import "swiper/css/autoplay";

import { BANNER_SLIDER_DURATION, bannerSlider } from '@/constants';
import Image from 'next/image';
import SliderNext from './SliderNext';

const BannerSlider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: BANNER_SLIDER_DURATION }}
            slidesPerView={1}
        >
            {bannerSlider.map(({ id, image, title, description }, index) => (
                <SwiperSlide key={id} className='relative'>
                    <div className='bg-[#00000088] absolute size-full' />
                    <Image
                        src={image}
                        alt={title}
                        width={1000}
                        height={400}
                        className='w-full h-[400px] object-cover'
                        quality={100}
                    />
                    <div className='absolute text-white top-[30%] left-10'>
                        <p className='text-xs sm:text-sm mb-5'>{title}</p>
                        <h1 className='sm:text-2xl font-medium'>{description}</h1>
                        <div className='mt-10'>
                            <SliderNext
                                bannerIndex={index}
                                banners={bannerSlider}
                                bannerId={id}
                                key={`${id}_next_${index}`}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default BannerSlider