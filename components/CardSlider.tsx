"use client";

import { secondSlider } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper/modules'
import { motion } from 'motion/react';
import Cursor from "./Cursor";
import { useCardSlider } from "@/hooks/useCardSlider";


import 'swiper/css/effect-coverflow';

const CardSlider = () => {

    const { pos, visible, getStyle, setPos, setVisible, setSwiperRef } = useCardSlider();
    return (
        <>
            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                slidesPerView={3}
                spaceBetween={30}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                }}
                onSlideChange={(swiper) => {
                    setSwiperRef({ ...swiper })
                }}
            >
                {secondSlider.map(({ id, image, title, description, startedYear }, index) => (
                    <SwiperSlide
                        key={id}
                    >
                        <div className="relative">
                            <Cursor pos={pos} visible={visible} display={getStyle(index).display} />
                            <Image
                                src={image}
                                alt={title}
                                width={250}
                                height={350}
                                className={`w-full h-auto sm:h-[350px] object-cover object-center`}
                                onMouseEnter={() => {
                                    if (getStyle(index).display === "hidden") return;
                                    setVisible(true);
                                }}
                                onMouseLeave={() => {
                                    setVisible(false);
                                    setPos({ x: 0, y: 0 });
                                }}
                                onMouseMove={(e) => {
                                    setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
                                }}
                            />
                        </div>
                        <div className={`flex flex-col items-center text-center mt-5 gap-y-3 text-black ${getStyle(index).display}`}>
                            {startedYear && <motion.span initial={{ opacity: 0.5, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-xs">Started in {startedYear}</motion.span>}
                            <motion.h1 initial={{ opacity: 0.5, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="font-semibold sm:text-2xl text-sm">{title}</motion.h1>
                            <motion.p initial={{ opacity: 0.5, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="sm:text-xl text-xs">{description}</motion.p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CardSlider