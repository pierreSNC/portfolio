import React from 'react';
import './Contact.css';
import Text from "../../components/atoms/Text/Text";

const Contact = () => {
    return (
        <section id="contact">
            <div className="experiences__title">
                <Text tag={'h2'} content={'Contact'} className={'text-[4rem]'} />
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
                            <i className="fa-solid fa-phone-volume"></i>
                            <a href="tel:+33781632039">07 81 63 20 39</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <a href="mailto:pierresenechal7@gmail.com">
                                pierresenechal7@gmail.com
                            </a>
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Paris / Troyes</p>
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
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>

        </section>
    )
};

export default Contact;
