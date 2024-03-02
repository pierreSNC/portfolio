import React from 'react';
import Header from "../../molecules/Header/Header";
import Image from "../../atoms/Image/Image";
import './Hero.css'
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const Hero = () => {
    return (
        <section className={'hero h-full lg:h-[100vh]'}>
            <Header />

            <article className={'container hero__content flex flex-col space-y-5'}>
                <div className="wrapper flex flex-col flex-col-reverse gap-y-12 lg:flex-row justify-between items-center">
                    <div className="item flex flex-col space-y-4">
                        <Text
                            tag={'p'}
                            content={'Bonjour ! 👋'}
                            className={'text-[2rem] lg:text-[3rem] text-black'}
                        />
                        <Text
                            tag={'h1'}
                            content={'Je suis Pierre Sénéchal'}
                            className={'text-[3rem] lg:text-[3rem] bold'}
                        />
                        <div className={'flex-col xl:flex-row flex gap-5 xl:items-center items-start'}>
                            <Text
                                tag={'p'}
                                content={'et je suis'}
                                className={'text-[2rem] lg:text-[2.5rem] text-black bold'}
                            />
                            <Text
                                tag={'span'}
                                content={'Développeur Web'}
                                className={'name text-[3rem] xl:text-[4rem]'}
                            />
                        </div>
                        <div>
                            <div className={'flex gap-x-12 mt-16'}>
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
                        </div>
                    </div>
                    <div className="box">

                    </div>
                </div>
            </article>
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
                    className={'puddle hidden lg:block'}
                />
        </section>
    );
};

export default Hero;