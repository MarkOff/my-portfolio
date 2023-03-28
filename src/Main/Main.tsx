import React from 'react';
import s from './Main.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import photo from '../assets/image/myPhoto.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>

            <div className={sContainer.container}>

                <div className={s.text}>
                    <span>{'Hi There!'}</span>
                    <h1> {'I am '}
                        <span className={s.textName}>{'Vladislav Markov'}</span>
                    </h1>
                    <span>{'Front - end Developer'}</span>
                </div>

                <div className={s.photo}>
                    <img src={photo} />
                </div>

            </div>

        </div>
    );
};

