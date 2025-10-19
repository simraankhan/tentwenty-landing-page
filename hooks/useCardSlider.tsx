import { useCallback, useState } from "react";
import { SwiperClass } from "swiper/react";

export const useCardSlider = () => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
    const [visible, setVisible] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const getStyle = useCallback((index: number) => {
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
    }, [swiperRef])

    return { swiperRef, setSwiperRef, visible, setVisible, pos, setPos, getStyle };
}