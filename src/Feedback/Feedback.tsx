import React, {FormEvent, FormEventHandler, MouseEvent, useState} from 'react';
import s from './Feedback.module.scss'
import {Title} from '../Common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import axios from 'axios';
import {Button} from '../Common/components/button/Button';

export const Feedback = () => {

    // const  SubmitForm = () => {
    //
    //     axios.post('http://localhost:3010/sendMessage', {
    //         name: 'test'
    //         // name: form.querySelector('#name').value,
    //         // email: form.querySelector('#email').value,
    //         // message: form!.querySelector('#message').value,
    //     })
    //         .then(() => {
    //             console.log('You message')
    //         })
    //
    // }

    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post('https://gmail-smtp-tqybf7tr8-markoff.vercel.app/sendMessage', { name, email, message })
            .then(() => {
                setEmail('')
                setName('')
                setMessage('')
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

                <div id={'contact-form'} className={s.formBlock} >
                    <Fade direction={'left'} triggerOnce={true} className={s.formBlock}>
                        <input value={name}  onChange={(event)=> setName(event.currentTarget.value)}   placeholder={'Name'} id={'name'} type="text"/>
                    </Fade>
                    <Fade direction={'right'} triggerOnce={true} className={s.formBlock}>
                        <input  value={email} onChange={(event)=> setEmail(event.currentTarget.value)}  placeholder={'E-mail'} id={'email'} type="text"/>
                    </Fade>
                    <Fade direction={'left'} triggerOnce={true} className={s.formBlock}>
                        <textarea value={message}  onChange={(event)=> setMessage(event.currentTarget.value)}  placeholder={'You message'} id={'message'}></textarea>
                    </Fade>
                    <Fade direction={'up'} triggerOnce={true} className={s.formBlock}>
                        <Button name={'Send message'} onHandler={handleSubmit} />
                    </Fade>
                </div>
            </div>

        </div>
    );
};

