import React from 'react';
import s from './Skill.module.scss'
import sContainer from '../Common/Styles/Container.module.css'

type SkillType = {
    title: string
    description: string
    style: {}

}

export const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>

            <div className={s.skillInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
};

