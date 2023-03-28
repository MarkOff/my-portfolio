import React from 'react';
import s from './Footer.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Title} from '../Common/components/title/Title';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <Title title={'Contacts'}/>

                <div className={s.footerElementsContainer}>
                    <div className={s.footerElement}>
                        <a  target="_blank"
                            href="https://www.linkedin.com/in/vladislav-markov-9984b6262/">
                            {'Linkedin'}
                        </a>
                    </div>

                    <div className={s.footerElement}>
                        <a  target="_blank"
                            href="https://github.com/MarkOff">
                            {'GitHub'}
                        </a>
                    </div>

                    <div className={s.footerElement}>
                        <a  target="_blank"
                            href="https://t.me/Big_Brother_is_Watching_Y0u">
                            {'Telegram'}
                        </a>
                    </div>

                    <div className={s.footerElement}>
                        <a  target="_blank"
                            href="https://e.mail.ru/cgi-bin/sentmsg?To=sam.samlin@mail.ru&from=otvet&afterReload=1">
                            {'Mail'}
                        </a>
                    </div>

                </div>
                <span className={s.title}>© All rights reserved </span>
            </div>
        </div>
    );
};

