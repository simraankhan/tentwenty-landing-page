"use client";

import { useState } from 'react'
import { motion } from 'motion/react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'


import 'swiper/css';
import "swiper/css/autoplay";

import { BANNER_SLIDER_DURATION, bannerSlider } from '@/constants';
import Image from 'next/image';
import SliderNext from './SliderNext';

const BannerSlider = () => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: BANNER_SLIDER_DURATION }}
            slidesPerView={1}
            onSlideChange={(swiper) => setSwiperRef({ ...swiper })}
        >
            {bannerSlider.map(({ id, image, title, description }, index) => (
                <SwiperSlide key={id} className='relative'>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 3, ease: [0.83, 0, 0.17, 1] }}
                    >
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
                                    swiperRef={swiperRef}
                                />
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default BannerSlider