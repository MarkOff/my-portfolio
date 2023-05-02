import React from 'react';
import s from './MyProjets.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../Common/components/title/Title';
import todoImg from './../assets/image/img_1.png'
import socialImg from './../assets/image/img.png'
import { Fade } from 'react-awesome-reveal';


export const MyProjects = () => {

    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todolist = {
        backgroundImage: `url(${todoImg})`
    }


    return (
        <div id ={'projects'} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Fade direction={'down'} triggerOnce={true}>
                <Title title={'Projects'}/>
                </Fade>
                <div className={s.projects}>
                    <Fade direction={'left'} triggerOnce={true}>
                    <Project title={'Social network'} urlProject={'https://markoff.github.io/samurai-way-main_02'}
                             description={'STACK: TypeScript, React, React-Router, Redux, Redux-Thunk, Formik, Axios. '}
                             style={social}
                    />
                    </Fade>
                    <Fade direction={'right'} triggerOnce={true}>
                    <Project title={'Todolist'} urlProject={'https://markoff.github.io/todoMain'}
                             description={'STACK: TypeScript, React, React-Router, Redux, Redux-Thunk, MUI, Formik, Axios, Jest.'}
                             style={todolist}
                    />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

