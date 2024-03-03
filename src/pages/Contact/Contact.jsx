import React from 'react';
import './Contact.css';

import Text from "../../components/atoms/Text/Text";
import Button from "../../components/atoms/Button/Button";
import { Element } from 'react-scroll';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__title">
                <Element name="contact">
                    <Text tag={'h2'} content={'Contact'} className={'text-[2.5rem] sm:text-[3rem] xl:text-[4rem]'} />
                </Element>
                <div className={'line'}></div>
            </div>
            <div className="contact__wrapper">
                <div className="contact__item">
                    <div>
                        <h3>Informations de contact</h3>
                        <p>
                            Vous pouvez me contacter par téléphone ou mail. Vous pouvez aussi le faire par le formulaire
                            de ce site.
                        </p>
                    </div>

                    <div className="contact__pictogram">
                        <div>
                            <Text tag={'span'} content={'📱'} className={'text-[1.5rem]'} />
                            <a href="tel:+33781632039">07 81 63 20 39</a>
                        </div>
                        <div>
                            <Text tag={'span'} content={'📩'} className={'text-[1.5rem]'} />
                            <a href="mailto:pierresenechal7@gmail.com">
                                pierresenechal7@gmail.com
                            </a>
                        </div>
                        <div>
                            <Text tag={'span'} content={'📍'} className={'text-[1.5rem]'} />
                            <p>Lille</p>
                        </div>
                    </div>
                </div>
                <div className="contact__form">
                    <form>
                        <div className="form__name">
                            <div>
                                <label htmlFor="lastname" hidden></label>
                                <input type="text" id="lastname" name="lastname" placeholder="Nom *" />
                            </div>
                            <div>
                                <label htmlFor="firstname" hidden></label>
                                <input type="text" id="firstname" name="firstname" placeholder="Prénom *" />
                            </div>
                        </div>
                        <div className="form__email">
                            <label htmlFor="email" hidden></label>
                            <input type="email" id="email" name="email" placeholder="Email *" />
                        </div>
                        <div className="form__message">
                            <label htmlFor="message" hidden></label>
                            <textarea name="message" id="message" placeholder="Votre message *"></textarea>
                        </div>
                        <Button
                            content={'ENVOYER'}
                            rounded={true}
                            icon={true}
                            iconContent={'📩'}
                            className={'text-white'}
                        />
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;
