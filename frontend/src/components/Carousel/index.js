import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageCarousel = ({ images }) => {

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ dynamicBullets: true }}
            style={{ width: '100%', height: '100%' }}
            className="-z-10"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="overflow-hidden">
                    <img src={image} className="object-cover min-h-full" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default ImageCarousel;
