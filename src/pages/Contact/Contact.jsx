import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

import Text from "../../components/atoms/Text/Text";
import Button from "../../components/atoms/Button/Button";
import { Element } from 'react-scroll';

const Contact = () => {

    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://45.155.169.51:3001/send-message', formData);
            setAlertMessage('Votre message a été envoyé avec succès.');
            setAlertType('alert-success');
            setFormData({
                lastname: '',
                firstname: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error("Erreur lors de l'envoi du message:", error);
            setAlertMessage('Une erreur est survenue lors de l\'envoi du message.');
            setAlertType('alert-error');
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="form__name">
                            <div>
                                <label htmlFor="lastname" hidden>Nom</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Nom *" value={formData.lastname} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="firstname" hidden>Prénom</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Prénom *" value={formData.firstname} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form__email">
                            <label htmlFor="email" hidden>Email</label>
                            <input type="email" id="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form__message">
                            <label htmlFor="message" hidden>Message</label>
                            <textarea name="message" id="message" placeholder="Votre message *" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        {alertMessage &&
                        <div className={`alert-message ${alertType}`}>
                                {alertMessage}
                            </div>
                        }
                        <Button
                            content={'ENVOYER'}
                            onClick={handleSubmit}
                            rounded={true}
                            icon={true}
                            iconContent={'📩'}
                            className={'text-white'}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
