import React from 'react';
import s from './Main.module.scss';
import {Particle} from '../Common/components/particle/Particle';
import { Fade } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect'
import { Tilt } from 'react-tilt';




export const Main = () => {


    return (
        <div id={'main'} className={s.mainBlock}>
            {/*<Particle/>*/}
                <div className={s.container}>
                    <Fade direction={'down'} triggerOnce={true}>
                    <div className={s.greeting}>
                        <span>Hi There </span>
                        <span> I am Vladislav <span>Markov</span> </span>
                        <ReactTypingEffect  text={'Frontend Developer.'}/>
                    </div>
                    </Fade>
                    <Fade direction={'down'} triggerOnce={true}>
                    <Tilt options={{max: 25}}>
                        <div className={s.photo}>
                        <div className={s.image}></div>
                    </div>
                    </Tilt>
                    </Fade>
                </div>
        </div>
    );
};


