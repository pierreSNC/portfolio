import React, { useRef } from 'react';
import { Element } from "react-scroll";

import Text from "../../components/atoms/Text/Text";
import Image from "../../components/atoms/Image/Image";

import './Works.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const Works = () => {
    const swiperRef = useRef(null);
    return (
        <section id='works'>
            <div className="works__title">
                <Element name="works">
                    <Text tag='h2' content='Travaux' className='text-[2.5rem] sm:text-[3rem] xl:text-[4rem]' />
                </Element>
                <div className='line'></div>
            </div>
            <div id="works-swiper" className={''}>
                <div className={'hidden sm:flex swiper-prev-button text-[2.5rem] cursor-pointer'} onClick={() => swiperRef.current.slidePrev()}>
                    <FaArrowLeft />
                </div>
                <div className={'hidden sm:flex swiper-next-button text-[2.5rem] cursor-pointer'} onClick={() => swiperRef.current.slideNext()}>
                    <FaArrowRight />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={25}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    className={'w-[80%] lg:w-[85%]'}
                    ref={swiperRef}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className={'slide-child'}>
                            <Image className={'w-full h-full object-cover p-2'}/>

                            <a href="#">
                                <Image url={'https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Logo.png'} className={'logo__github'}/>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'slide-child'}>
                            <Image className={'w-full h-full object-cover p-2'}/>

                            <a href="#">
                                <Image url={'https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Logo.png'} className={'logo__github'}/>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'slide-child'}>
                            <Image className={'w-full h-full object-cover p-2'}/>

                            <a href="#">
                                <Image url={'https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Logo.png'} className={'logo__github'}/>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'slide-child'}>
                            <Image className={'w-full h-full object-cover p-2'}/>

                            <a href="#">
                                <Image url={'https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Logo.png'} className={'logo__github'}/>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'slide-child'}>
                            <Image className={'w-full h-full object-cover p-2'}/>

                            <a href="#">
                                <Image url={'https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Logo.png'} className={'logo__github'}/>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default Works;
