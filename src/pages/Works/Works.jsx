import React, {useRef, useState} from 'react';
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
    const [openPopUp, setOpenPopUp] = useState(false);

    const togglePopUp = () => {
        setOpenPopUp(false);
    }

    return (
        <section id='works'>
            {openPopUp ? (
                <div className="pokedex-pop-up">
                    <div className={'pop-up'}>
                        <div className="mark" onClick={() => togglePopUp()}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EHed72F0ZCk?si=p4VNyARXABe9u8L4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>

                        </iframe>
                    </div>
                </div>
            ) : ''}
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
                        <a href="http://45.155.169.51/Saphiir" target={'_blank'}>
                            <div className={'slide-child'}>
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-cover p-2 filter blur-sm'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-saphiir.jpg`}
                                />
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-contain p-2'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-saphiir.jpg`}
                                />

                                <a href="https://github.com/pierreSNC/saphiir-front">
                                    <Image url={`${process.env.PUBLIC_URL}/assets/img/GitHub-Logo.png`} className={'logo__github'}/>
                                </a>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                            <a href="http://45.155.169.51/Discord" target={'_blank'}>
                                <div className={'slide-child'}>
                                    <Image
                                        className={'w-full h-full absolute top-0 left-0 object-cover p-2 filter blur-sm'}
                                        url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-discord.jpg`}
                                    />
                                    <Image
                                        className={'w-full h-full absolute top-0 left-0 object-contain p-2'}
                                        url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-discord.jpg`}
                                    />
                                    <a href="https://github.com/pierreSNC/discord-symfony">
                                        <Image url={`${process.env.PUBLIC_URL}/assets/img/GitHub-Logo.png`} className={'logo__github'}/>
                                    </a>
                                </div>
                            </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://45.155.169.51/TVMaze" target={'_blank'}>
                            <div className={'slide-child'}>
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-cover p-2 filter blur-sm'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-TVMaze.jpg`}
                                />
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-contain p-2'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-TVMaze.jpg`}
                                />
                                <a href="https://github.com/pierreSNC/TVMaze">
                                    <Image url={`${process.env.PUBLIC_URL}/assets/img/GitHub-Logo.png`} className={'logo__github'}/>
                                </a>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div onClick={() => setOpenPopUp(true)}>
                            <div className={'slide-child'}>
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-cover p-2 filter blur-sm'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-pokedex.jpg`}
                                />
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-contain p-2'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-pokedex.jpg`}
                                />

                                <a href="https://github.com/pierreSNC/Pokedex">
                                    <Image url={`${process.env.PUBLIC_URL}/assets/img/GitHub-Logo.png`} className={'logo__github'}/>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="http://45.155.169.51/Tesla" target={'_blank'}>
                            <div className={'slide-child'}>
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-cover p-2 filter blur-sm'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-tesla.jpg`}
                                />
                                <Image
                                    className={'w-full h-full absolute top-0 left-0 object-contain p-2'}
                                    url={`${process.env.PUBLIC_URL}/assets/img/works/thumbnail-tesla.jpg`}
                                />
                                <a href="https://github.com/pierreSNC/Tesla">
                                    <Image url={`${process.env.PUBLIC_URL}/assets/img/GitHub-Logo.png`} className={'logo__github'}/>
                                </a>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default Works;
