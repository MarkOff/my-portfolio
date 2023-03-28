import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../Common/Styles/Container.module.css'
import {Title} from '../Common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title title={'Feedback'}/>

                <form className={s.formBlock}>
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={'E-mail'} type="text"/>
                    <textarea placeholder={'You message'}></textarea>
                    <button className={s.button} type="submit">Send</button>
                </form>
            </div>

        </div>
    );
};

