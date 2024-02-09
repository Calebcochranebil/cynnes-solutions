import React from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import instagramIcon from "../images/instagram.png";
import linkedinIcon from "../images/linkedin.png";
import matIcon from "../images/mats sold.png";
import qualityIcon from "../images/quality.png";
import returnIcon from "../images/return.png";
import tiktokIcon from "../images/tiktok.png";
import warrantyIcon from "../images/warranty.png";

export default function Features() {
    return (
        <section className="mt-[128px] border-t-2 border-b-2 border-orange w-full">
            <div className="flex flex-row justify-center items-center p-2 md:flex hidden">
                {/* Left Content */}
                <div className="flex flex-1 flex-row justify-evenly gap-10">
                    <div className="text-center">
                        <img
                            src={matIcon}
                            alt="Icon 1"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>1+ Snow-Free Driveways</p>
                    </div>
                    <div className="text-center">
                        <img
                            src={qualityIcon}
                            alt="Icon 2"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>Quality Custom Mats</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-2 flex-row justify-center">
                    <a
                        href="https://www.instagram.com/cynnessolutions/"
                        className=""
                    >
                        <img
                            src={instagramIcon}
                            alt="Instagram"
                            className="w-16 h-16"
                        />
                    </a>
                    <a href="your-tiktok-link" className="">
                        <img
                            src={tiktokIcon}
                            alt="TikTok"
                            className="w-16 h-16"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/cynnes-solutions"
                        className=""
                    >
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="w-16 h-16"
                        />
                    </a>
                </div>

                {/* Right Content */}
                <div className="flex flex-1 flex-row justify-evenly gap-4">
                    <div className="text-center">
                        <img
                            src={warrantyIcon}
                            alt="Icon 3"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>5 Year Warranty</p>
                    </div>
                    <div className="text-center">
                        <img
                            src={returnIcon}
                            alt="Icon 4"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>Repeat Customer Discount</p>
                    </div>
                </div>
            </div>

            {/* Slider content for smaller screens */}
            <div className="md:hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                src={matIcon}
                                alt="Icon 1"
                                className="w-12 h-12 mx-auto"
                            />
                            <p className="text-center">
                                1+ Snow-Free Driveways
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                src={qualityIcon}
                                alt="Icon 2"
                                className="w-12 h-12 mx-auto"
                            />
                            <p className="text-center">Quality Custom Mats</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                src={instagramIcon}
                                alt="Instagram"
                                className="w-16 h-16 mx-auto"
                            />
                            <p className="text-center">
                                Follow us on Instagram
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                src={tiktokIcon}
                                alt="TikTok"
                                className="w-16 h-16 mx-auto"
                            />
                            <p className="text-center">Check out our TikTok</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                src={linkedinIcon}
                                alt="LinkedIn"
                                className="w-16 h-16 mx-auto"
                            />
                            <p className="text-center">
                                Connect with us on LinkedIn
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                src={warrantyIcon}
                                alt="Icon 3"
                                className="w-12 h-12 mx-auto"
                            />
                            <p className="text-center">3 Year Warranty</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                src={returnIcon}
                                alt="Icon 4"
                                className="w-12 h-12 mx-auto"
                            />
                            <p className="text-center">
                                Repeat Customer Discount
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
