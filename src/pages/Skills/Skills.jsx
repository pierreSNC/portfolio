import React from 'react';
import './Skills.css';

import Text from "../../components/atoms/Text/Text";

const Skills = () => {
    return (
        <section id={'skills'}>
            <div className="skills__title">
                <Text tag={'h2'} content={'Compétences'} className={'text-[4rem]'} />
                <div className={'line'}></div>
            </div>

            <div className="skills__wrapper">
                <div className="skill__item html">
                    <p>HTML / SCSS</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
                <div className="skill__item php">
                    <p>PHP / MYSQL</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
                <div className="skill__item javascript">
                    <p>Javascript</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
                <div className="skill__item symfony">
                    <p>Symfony</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
                <div className="skill__item reactjs">
                    <p>ReactJS</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
                <div className="skill__item node">
                    <p>Node JS</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
                <div className="skill__item prestashop">
                    <p>Prestashop</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
                <div className="skill__item docker">
                    <p>Docker</p>
                    <div className="progress__bar">
                        <div className="progress__empty">
                            <div className="progress__fill"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;