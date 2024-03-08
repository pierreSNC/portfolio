import React, {useEffect, useState} from 'react';
import './Experiences.css'
import Text from "../../components/atoms/Text/Text";
import { Element } from 'react-scroll';

const Experiences = () => {
    const [months, setMonths] = useState(0);

    useEffect(() => {
        const startDate = new Date('September 11, 2023');
        const currentDate = new Date();

        const monthsElapsed = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + currentDate.getMonth() - startDate.getMonth();

        setMonths(monthsElapsed);
    }, []);
    return (
        <section id="experience">
            <div className="experiences__title">
                <Element name="experiences">
                    <Text tag={'h2'} content={'Experiences'} className={'text-[2.5rem] sm:text-[3rem] xl:text-[4rem]'} />
                </Element>
                <div className={'line'}></div>
            </div>
            <div className="experience__wrapper">
                <div className="experience__item">
                    <div className="experience__item__top">
                        <h3>Développeur Back-end</h3>
                        <div className="information">
                            <p className="company">IT-Room</p>
                            <span>|</span>
                            <p className="date">Septembre 2023 - Aujourd'hui</p>
                        </div>
                        <div className="experience__tag">
                            <p className="duration">{months} mois</p>
                        </div>
                    </div>
                    <div className="experience__item__bottom">
                        <p className="description">
                            Développement de module PrestaShop spécique à la demande des clients. Maintenance des sites en ligne.
                        </p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="experience__item__top">
                        <h3>Développeur Front-end</h3>
                        <div className="information">
                            <p className="company">Namkin - BTOB CUSTOMER EXPERIENCE</p>
                            <span>|</span>
                            <p className="date">Septembre 2022 - Août 2023</p>
                        </div>
                        <div className="experience__tag">
                            <p className="duration">1 ans</p>
                        </div>
                    </div>
                    <div className="experience__item__bottom">
                        <p className="description">
                            Travaille sur le développement front-end avec Symfony pour des sites vitrines. Création de site dédié au  commerce électronique avec Prestashop. J'ai appris le système de composants avec l'atomic design.
                        </p>
                    </div>
                </div>
                <div className="experience__item">
                    <div className="experience__item__top">
                        <h3>Développeur Web</h3>
                        <div className="information">
                            <p className="company">Agence web ACTUAL</p>
                            <span>|</span>
                            <p className="date">Avril 2022 - Juillet 2022</p>
                        </div>
                        <div className="experience__tag">
                            <p className="duration">3 mois</p>
                        </div>
                    </div>
                    <div className="experience__item__bottom">
                        <p className="description">
                            Création de site vitrine et de maintenance de site internet avec le CMS Joomla ou Prestashop en adéquation avec la demande des clients.
                        </p>
                    </div>
                </div>
            </div>
</section>
    );
};

export default Experiences;