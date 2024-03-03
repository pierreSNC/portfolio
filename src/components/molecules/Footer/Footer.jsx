import React from 'react';
import './Footer.css';

import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";

const Footer = () => {
    return (
        <section id={'footer'}>
            <footer>
                <article>
                    <Image />
                    <Text tag={'p'} content={'Développeur Web en recherche d\'une alterance dasn le développement Javascript.'} className={'w-[75%]'} />
                </article>
                <article>
                    <Text tag={'h3'} content={'Liens importants'} className={'text-xl mb-4'}  />
                    <div className={'flex flex-col space-y-2'}>
                        <div className={'flex gap-x-2 items-center'}>
                            <div className={'bg-primary rounded-full h-[18px] w-[18px] flex items-center justify-center item-list'}>
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                            <Text tag={'p'} content={'Compétences'} />
                        </div>
                        <div className={'flex gap-x-2 items-center'}>
                            <div className={'bg-primary rounded-full h-[18px] w-[18px] flex items-center justify-center item-list'}>
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                            <Text tag={'p'} content={'Travaux'} />
                        </div>
                        <div className={'flex gap-x-2 items-center'}>
                            <div className={'bg-primary rounded-full h-[18px] w-[18px] flex items-center justify-center item-list'}>
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                            <Text tag={'p'} content={'Expériences'} />
                        </div>
                    </div>
                </article>
                <article>
                    <Text tag={'h3'} content={'Contact'} className={'text-xl mb-4'} />
                    <div className={'flex flex-col space-y-2'}>
                        <div className={'flex gap-x-2 items-center'}>
                            <div className={'bg-primary rounded-full h-[18px] w-[18px] flex items-center justify-center item-list'}>
                                <i className="fa-solid fa-envelope text-xs"></i>
                            </div>
                            <Text tag={'a'} content={'pierresenechal7@gmail.com'} href={'mailto:pierresenechal7@gmail.com'} />
                        </div>
                        <div className={'flex gap-x-2 items-center'}>
                            <div className={'bg-primary rounded-full h-[18px] w-[18px] flex items-center justify-center item-list'}>
                                <i className="fa-solid fa-phone text-xs"></i>
                            </div>
                            <Text tag={'a'} content={'07 81 63 20 39'} href={'tel:+33781632039'}/>
                        </div>
                        <div className={'flex gap-x-2 items-center'}>
                            <div className={'bg-primary rounded-full h-[18px] w-[18px] flex items-center justify-center item-list'}>
                                <i className="fa-solid fa-location-dot text-xs"></i>
                            </div>
                            <Text tag={'p'} content={'Lille'} />
                        </div>
                    </div>
                </article>
            </footer>
            <div className={'flex justify-center pt-12'}>
                <Text tag={'p'} content={'© Pierre Sénéchal, 2024. Tous droits réservés.'} />
            </div>
        </section>
    );
};

export default Footer;