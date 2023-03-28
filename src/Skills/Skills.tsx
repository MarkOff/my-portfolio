import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Title} from '../Common/components/title/Title';
import logoJS from '../assets/image/js.png';
import logoReact from '../assets/image/react.png';
import logoHTML from '../assets/image/html.png';

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
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JAVASCRIPT / TYPESCRIPT'}
                           description={'Promise, RestAPI, Unit-tests'}
                           style={js}
                    />
                    <Skill title={'REACT & REDUX'}
                           description={'Redux-Thunk, Redux Toolkit'}
                           style={react}
                    />

                    <Skill title={'HTML & CSS'}
                           description={'Grid, Flex, LESS, SCSS'}
                           style={html}
                    />
                </div>
            </div>
        </div>
    );
};

