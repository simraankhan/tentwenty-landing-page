"use client";

import { BANNER_SLIDER_DURATION } from '@/constants';
import React, { useEffect, useRef, useState } from 'react'
import { useSwiper } from 'swiper/react';

interface SliderNextProps {
    banners: Banner[];
    bannerIndex: number;
    bannerId: string;
}
const SliderNext = ({ bannerIndex, banners, bannerId }: SliderNextProps) => {
    const [progress, setProgress] = useState(0);
    const swiper = useSwiper();

    useEffect(() => {
        console.log("useEffect", bannerId);

        const start = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - start;
            setProgress((elapsed / BANNER_SLIDER_DURATION) * 100);
            if (elapsed >= BANNER_SLIDER_DURATION) {
                clearInterval(timer);
                setProgress(100);
            }
        }, 30);
        return () => clearInterval(timer);
    }, [bannerId]);

    const nextRef = useRef<HTMLDivElement>(null);

    const nextBannerIdx = bannerIndex + 1 === banners.length ? 0 : bannerIndex + 1;

    const { image } = banners[nextBannerIdx];

    const width = nextRef.current?.offsetWidth || 0;
    const height = nextRef.current?.offsetWidth || 0;

    const circumference = 2 * (width + height);

    const strokeDashoffset = circumference - (progress / 100) * circumference;


    return (
        <div className='flex items-center gap-x-3'>
            <div ref={nextRef} className='flex size-25 border border-gray-200 p-3 relative'>
                <svg
                    width={width}
                    height={height}
                    className='absolute top-0 left-0'
                >
                    <rect
                        width={width}
                        height={height}
                        stroke="white"
                        strokeWidth="7"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                            transition: "stroke-dashoffset 0.03s linear",
                        }}
                    />
                </svg>
                <div style={{ backgroundImage: `url(${image})` }} className={`cursor-pointer flex items-center justify-center bg-cover bg-center flex-1 bg-no-repeatc z-1`} onClick={() => swiper.slideNext()}>
                    <span>Next</span>
                </div>
            </div>
            <div className='flex items-center gap-x-3'>
                <span className='text-sm font-medium'>{String(bannerIndex + 1).padStart(2, '0')}</span>
                <div className='h-[1px] w-[100px] bg-white' />
                <span className='text-sm font-medium'>{String(banners.length).padStart(2, '0')}</span>
            </div>
        </div>
    )
}

export default SliderNext;