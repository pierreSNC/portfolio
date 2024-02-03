import React from 'react';
import Header from "../../molecules/Header/Header";
import Image from "../../atoms/Image/Image";
import './Hero.css'
import Text from "../../atoms/Text/Text";

const Hero = () => {
    return (
        <div className={'hero'}>
            <Header />

            <div className={'container hero__content'}>
                <Text
                    tag={'h1'}
                    content={'Pierre Sénéchal'}
                    className={'name text-3xl'}
                />
                <Text
                    tag={'p'}
                    content={'Développeur Full-Stack Junior'}
                    className={'text-xl'}
                />
            </div>
            <div className={'hero__quote'}>
                <Image
                    url={`${process.env.PUBLIC_URL}/assets/img/quote.png`}
                />
                <Text
                    tag={'p'}
                    content={'Code is like humor, when you have to explain it, it\'s bad'}
                    className={'text-lg'}
                />
                <Image
                    url={`${process.env.PUBLIC_URL}/assets/img/quote.png`}
                />
            </div>
            <Image
                url={`${process.env.PUBLIC_URL}/assets/img/puddle.png`}
                alt={'puddle'}
                width={'308px'}
                height={'auto'}
                className={'puddle'}
            />
        </div>
    );
};

export default Hero;