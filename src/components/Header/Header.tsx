import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

export type PropsType = {
    login: string
    isAuth: boolean
    logout:any//ПОМЕНЯТЬ
}

function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <img alt={'trololo'}
                 src="https://e7.pngegg.com/pngimages/197/457/png-clipart-round-multicolored-logo-vanamo-logo-icons-logos-emojis-tech-companies.png"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?  <div>{props.login} - <button onClick={props.logout}>log out </button> </div>
                    : <NavLink to={'login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;