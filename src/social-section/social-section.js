import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SocialSection() {
    return (
        <div className="containers container-fluid  padding bg-white position-relative">
            <div className="position-absolute w-100">
                <p className="paragraph1">Join 4,000+ companies already growing</p>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{ clickable: false }}
                    navigation={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                    className="mySwiper w-100 fs-1"
                >
                    <SwiperSlide>
                        <img
                            src="/assests/img/Fictional company logo.png"
                            alt="Social 1"
                            className="img-fluid swiper-img"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assests/img/Fictional company logo (1).png"
                            alt="Social 2"
                            className="img-fluid swiper-img"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assests/img/Fictional company logo (2).png"
                            alt="Social 3"
                            className="img-fluid swiper-img"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assests/img/Fictional company logo (3).png"
                            alt="Social 4"
                            className="img-fluid swiper-img"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assests/img/Fictional company logo (4).png"
                            alt="Social 5"
                            className="img-fluid swiper-img"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assests/img/Fictional company logo (5).png"
                            alt="Social 6"
                            className="img-fluid swiper-img"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
}
