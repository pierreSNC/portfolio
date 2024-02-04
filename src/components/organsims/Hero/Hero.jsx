import React from 'react';
import Header from "../../molecules/Header/Header";
import Image from "../../atoms/Image/Image";
import './Hero.css'
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const Hero = () => {
    return (
        <div className={'hero'}>
            <Header />

            <div className={'container hero__content flex flex-col space-y-5'}>
                <div className="wrapper flex justify-between items-center">
                    <div className="item">
                        <Text
                            tag={'p'}
                            content={'Bonjour ! 👋'}
                            className={'text-2xl text-black'}
                        />
                        <Text
                            tag={'h1'}
                            content={'Je suis Pierre Sénéchal'}
                            className={'text-2xl bold'}
                        />
                        <div className={'flex gap-x-5 items-center'}>
                            <Text
                                tag={'p'}
                                content={'et je suis'}
                                className={'text-[2.5rem] text-black bold'}
                            />
                            <Text
                                tag={'span'}
                                content={'Développeur Web'}
                                className={'name text-2xl'}
                            />
                        </div>
                        <Button content={'Contact Moi ! '} rounded={true} className={'text-white'} />
                        <Button
                            content={'Mes Projets ! '}
                            rounded={true}
                            background={"none"}
                            border={'primary'}
                            icon={true}
                            iconContent={'🔧'}
                        />

                    </div>
                    <div className="box">

                    </div>
                </div>
            </div>
            {/*<div className={'hero__quote'}>*/}
            {/*    <Image*/}
            {/*        url={`${process.env.PUBLIC_URL}/assets/img/quote.png`}*/}
            {/*    />*/}
            {/*    <Text*/}
            {/*        tag={'p'}*/}
            {/*        content={'Code is like humor, when you have to explain it, it\'s bad'}*/}
            {/*        className={'text-lg'}*/}
            {/*    />*/}
            {/*    <Image*/}
            {/*        url={`${process.env.PUBLIC_URL}/assets/img/quote.png`}*/}
            {/*    />*/}
            {/*</div>*/}
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