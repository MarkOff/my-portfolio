import React from 'react';
import s from './Feedback.module.scss'
import {Title} from '../Common/components/title/Title';
import {Fade} from 'react-awesome-reveal';

export const Feedback = () => {
    return (
        <div  className={s.contactsBlock}>
            <div id={'feedback'} className={s.contactsContainer}>
                <Fade direction={'down'} triggerOnce={true}>
                    <Title title={'Feedback'}/>
                </Fade>

                <form className={s.formBlock}>
                    <Fade direction={'left'} triggerOnce={true} className={s.formBlock}>
                        <input placeholder={'Name'} type="text"/>
                    </Fade>
                    <Fade direction={'right'} triggerOnce={true} className={s.formBlock}>
                        <input placeholder={'E-mail'} type="text"/>
                    </Fade>
                    <Fade direction={'left'} triggerOnce={true} className={s.formBlock}>
                        <textarea placeholder={'You message'}></textarea>
                    </Fade>
                    <Fade direction={'up'} triggerOnce={true} className={s.formBlock}>
                        <button type="submit">Send message</button>
                    </Fade>
                </form>
            </div>

        </div>
    );
};

