"use client";

import { useState } from 'react'
import { motion } from 'motion/react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import SliderPagination from './SliderPagination';
import Image from 'next/image';
import { BANNER_SLIDER_DURATION, bannerSlider } from '@/constants';


import 'swiper/css';
import "swiper/css/autoplay";


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
                <SwiperSlide className='relative' key={id}>
                    {/* Additional key to remount the animation when slide changes*/}
                    <motion.div
                        initial={{ scaleY: 0, }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 1, velocity: 0.5, ease: "easeOut" }}
                        key={`${id}-${Date.now()}`}
                    >
                        <div className='bg-[#00000088] absolute size-full' />
                        <Image
                            src={image}
                            alt={title}
                            width={1000}
                            height={600}
                            className='w-full h-[600px] aspect-[16/9] object-cover'
                            quality={100}
                        />
                        <div className='absolute text-white top-[30%] left-[1%]'>
                            <p className='text-xs sm:text-sm mb-5'>{title}</p>
                            <h1 className='sm:text-2xl font-medium'>{description}</h1>
                            <div className='mt-10'>
                                <SliderPagination
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