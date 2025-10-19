"use client";

import { secondSlider } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper/modules'
import { Button } from "./ui/button";
import { ChevronsLeftRight } from "lucide-react";

import 'swiper/css/effect-coverflow';

const CardSlider = () => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

    const getStyle = (index: number) => {
        let display = "";

        if (!swiperRef) {
            display = index === 1 ? "block" : "hidden";
            return { display };
        }

        if (index === swiperRef.activeIndex) {
            display = "hidden";
        } else if (index === swiperRef.activeIndex + 1) {
            display = "block";
        } else {
            display = "hidden";
        }

        return { display };
    }

    return (
        <>
            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                slidesPerView={3}
                onSlideChange={(swiper) => {
                    setSwiperRef({ ...swiper });
                }}
                spaceBetween={30}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                }}
                pagination={true}
            >
                {secondSlider.map(({ id, image, title, description, startedYear }, index) => (
                    <SwiperSlide
                        key={id}
                    >
                        <div className="relative">
                            <Image
                                src={image}
                                alt={title}
                                width={250}
                                height={300}
                                className={`w-full aspect-[6/9] object-cover object-center transition-all`}
                            />
                            <Button className={`${getStyle(index).display} rounded-full bg-white text-black absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-move hover:bg-white`}>
                                <ChevronsLeftRight />
                            </Button>
                        </div>
                        <div className={`flex flex-col items-center text-center mt-10 gap-y-3 ${getStyle(index).display}`}>
                            {startedYear && <span className="text-xs">Started in {startedYear}</span>}
                            <h1 className="font-semibold sm:text-2xl text-sm">{title}</h1>
                            <p className="sm:text-xl text-xs">{description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CardSlider