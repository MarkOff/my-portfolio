import React, {FC} from 'react';
import s from './Button.module.scss'

type Props = {
    name: string
    id?: string
    onHandler?: (event: any) => void
}

export const Button: FC<Props> = ({name, id, onHandler}) => {
    return (
            <a onClick={onHandler} href={id} className={s.button} type="submit">{name}</a>
    );
};

