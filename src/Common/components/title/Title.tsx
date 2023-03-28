import React from 'react';
import s from './Title.module.scss'

type  TitleType = {
    title: string
    newClass?: string
}


export const Title: React.FC<TitleType> = ({title,newClass}) => {
    return (
        <div className={`${s.title} ${newClass}`}>
            <h2>{title}</h2>
        </div>
    )
};

