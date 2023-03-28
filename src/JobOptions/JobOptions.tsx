import React from 'react';
import s from './JobOptions.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Title} from '../Common/components/title/Title';

export const JobOptions = () => {
    return (
        <div className={s.jobBlock}>
            <div className={`${sContainer.container} ${s.jobContainer}`}>
                <Title title={'Considering remote work options'}/>
                <a className={s.button} href="">{'Hire me'}</a>
            </div>
        </div>
    );
};

