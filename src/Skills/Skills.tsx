import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill';
import logoJS from '../assets/image/js.png';
import logoReact from '../assets/image/react.png';
import logoHTML from '../assets/image/html.png';
import {Title} from '../Common/components/title/Title';
import {Fade} from 'react-awesome-reveal';

export const Skills = () => {

    const js = {
        backgroundImage: `url(${logoJS})`
    }
    const react = {
        backgroundImage: `url(${logoReact})`
    }
    const html = {
        backgroundImage: `url(${logoHTML})`
    }



    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div  className={s.skillsContainer}>
                <Fade direction={'down'} triggerOnce={true}>
                <Title title={'Skills'}/>
                </Fade>

                <div className={s.skills}>
                    <Fade direction={'down'} triggerOnce={true}>
                    <Skill title={'JAVASCRIPT / TYPESCRIPT'}
                           description={'Promise, RestAPI, ES6+, Unit-tests'}
                           style={js}
                    />
                    </Fade>
                    <Fade direction={'down'} triggerOnce={true}>
                    <Skill title={'REACT & REDUX'}
                           description={'Redux(toolkit), Redux-Thunk, React router dom, Formik, React hook form'}
                           style={react}
                    />
                    </Fade>
                    <Fade direction={'down'} triggerOnce={true}>
                    <Skill title={'HTML & CSS'}
                           description={'Grid, Flex, LESS, SCSS'}
                           style={html}
                    />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

