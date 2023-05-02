import s from './Project.module.scss'
import React from 'react';
import {Button} from '../../Common/components/button/Button';

type ProjectType = {
    title: string
    description: string
    style: {}
    urlProject: string
}

export const Project = (props: ProjectType) => {

    return (
        <div className={s.project}>

            <div className={s.icon} style={props.style}>
                <Button id={props.urlProject} name={'VIEW'}/>
            </div>

            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
};

