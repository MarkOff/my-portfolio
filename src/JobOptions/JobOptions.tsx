import React from 'react';
import s from './JobOptions.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Title} from '../Common/components/title/Title';
import {Button} from '../Common/components/button/Button';
import {Fade} from 'react-awesome-reveal';
import {Link} from 'react-scroll';

export const JobOptions = () => {
    return (
        <div className={s.jobBlock}>
            <div className={s.jobContainer}>
                <Fade direction={'down'} triggerOnce={true}>
                <Title title={'Considering remote work options'}/>
                </Fade>
                <Fade className={s.jobContainer} direction={'up'} triggerOnce={true}>
                    <Link className={s.button} activeClass={s.button} to="feedback" spy={true} smooth={true}
                          offset={-100} duration={500}>
                        Hire me
                    </Link>
                </Fade>
            </div>
        </div>
    );
};

