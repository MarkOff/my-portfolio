import React, {FC} from 'react';
import s from './Button.module.scss'

type Props = {
    name: string
    id?: string
}

export const Button: FC<Props> = ({name, id}) => {
    return (
            <a href={id} className={s.button} type="submit">{name}</a>
    );
};

