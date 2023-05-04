import React, {useState} from 'react';
import s from './Feedback.module.scss'
import {Title} from '../Common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {Button} from '../Common/components/button/Button';

export const Feedback = () => {

    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('https://gmail-smtp-six.vercel.app/sendMessage', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({name, email, message}), // body data type must match "Content-Type" header
        })
            .then(() => {
                setEmail('')
                setName('')
                setMessage('')
                setIsSubmitted(true)
                console.log('Your message was sent.');
            })
            .catch(() => {
                console.log('Failed to send your message.');
            });
    }


    return (
        <div className={s.contactsBlock}>
            <div id={'feedback'} className={s.contactsContainer}>
                <Fade direction={'down'} triggerOnce={true}>
                    <Title title={'Feedback'}/>
                </Fade>

                <div id={'contact-form'} className={s.formBlock}>
                    {!isSubmitted ? (
                        <>
                            <Fade direction={'left'} triggerOnce={true} className={s.formBlock}>
                                <input value={name} onChange={(event) => setName(event.currentTarget.value)}
                                       placeholder={'Name'} id={'name'} type="text" disabled={isSubmitted}/>
                            </Fade>
                            <Fade direction={'right'} triggerOnce={true} className={s.formBlock}>
                                <input value={email} onChange={(event) => setEmail(event.currentTarget.value)}
                                       placeholder={'E-mail'} id={'email'} type="text" disabled={isSubmitted}/>
                            </Fade>
                            <Fade direction={'left'} triggerOnce={true} className={s.formBlock}>
                                <textarea value={message} onChange={(event) => setMessage(event.currentTarget.value)}
                                          placeholder={'You message'} id={'message'} disabled={isSubmitted}></textarea>
                            </Fade>
                            <Fade direction={'up'} triggerOnce={true} className={s.formBlock}>
                                <Button name={'Send message'} onHandler={handleSubmit}/>
                            </Fade>
                        </>
                    ) : (
                        <Fade direction={'down'} triggerOnce={true}>
                        <div id={'feedback'} className={s.textFeedBack}>{'Thanks for the feedback!'}</div>
                        </Fade>
                    )}
                </div>
            </div>
        </div>
    );
};