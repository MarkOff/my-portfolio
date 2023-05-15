import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import toggleMenu from '../../assets/image/toggleMenu.png'
import {Link, animateScroll as scroll} from 'react-scroll'


export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerButtonClick = () => {
         setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={-100} duration={500}>
                    Main
                </Link>
                <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                    Skills
                </Link>
                <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                    Projects
                </Link>
                <Link activeClass={s.active} to="feedback" spy={true} smooth={true} offset={-200} duration={500}>
                    Contacts
                </Link>
            </div>
            <img onClick={onBurgerButtonClick} src={toggleMenu} className={s.burgerButton} alt={'menuIcon'}/>
        </div>
    );
};

