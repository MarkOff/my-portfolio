import React from 'react';
import s from './JobOptions.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Title} from '../Common/components/title/Title';
import {Button} from '../Common/components/button/Button';
import { Fade } from 'react-awesome-reveal';

export const JobOptions = () => {
    return (
        <div className={s.jobBlock}>
            <div className={s.jobContainer}>
                <Fade direction={'down'} triggerOnce={true}>
                <Title title={'Considering remote work options'}/>
                </Fade>
                <Fade direction={'up'} triggerOnce={true}>
                <Button id={'#feedback'} name={'Hire me'}/>
                </Fade>
            </div>
        </div>
    );
};

