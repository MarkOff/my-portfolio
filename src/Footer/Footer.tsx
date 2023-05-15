import React from 'react';
import s from './Footer.module.scss'
import {Title} from '../Common/components/title/Title';
import { Fade } from 'react-awesome-reveal';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <Fade direction={'down'} triggerOnce={true}>
                <Title title={'Contacts'}/>
                </Fade>

                <div className={s.footerElementsContainer}>
                    <Fade direction={'down'} triggerOnce={true}>
                    <div className={s.footerElement}>
                        <a target="_blank"
                           href="https://www.linkedin.com/in/vladislav-markov-9984b6262/">
                            {'Linkedin'}
                        </a>
                    </div>

                    <div className={s.footerElement}>
                        <a target="_blank"
                           href="https://github.com/MarkOff">
                            {'GitHub'}
                        </a>
                    </div>
                    </Fade>
                    <Fade direction={'down'} triggerOnce={true}>
                    <div className={s.footerElement}>
                        <a target="_blank"
                           href="https://t.me/Big_Brother_is_Watching_Y0u">
                            {'Telegram'}
                        </a>
                    </div>

                    <div className={s.footerElement}>
                        <a target="_blank"
                           href="https://e.mail.ru/cgi-bin/sentmsg?To=sam.samlin@mail.ru&from=otvet&afterReload=1">
                            {'Mail'}
                        </a>
                    </div>
                    </Fade>
                </div>
                <Fade direction={'up'} triggerOnce={true}>
                <span className={s.title}>© All rights reserved </span>
                </Fade >
            </div>
        </div>
    );
};

