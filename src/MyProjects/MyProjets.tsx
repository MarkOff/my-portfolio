import React from 'react';
import s from './MyProjets.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../Common/components/title/Title';
import todoImg from './../assets/image/img_1.png'
import socialImg from './../assets/image/img.png'




export const MyProjects = () => {

    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todolist = {
        backgroundImage: `url(${todoImg})`
    }


    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'STACK: TypeScript, React, React-Router, Redux, Redux-Thunk, Formik, Axios, '}
                             style={social}
                    />
                    <Project title={'Todolist'}
                             description={'STACK: TypeScript, React, React-Router, Redux, Redux-Thunk, MUI, Formik, Axios, StoryBook, Jest'}
                             style={todolist}
                    />
                </div>
            </div>
        </div>
    );
};

