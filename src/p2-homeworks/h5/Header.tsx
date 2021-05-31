import React from 'react'
import {NavLink} from 'react-router-dom'
import { PATH } from './Routes'
import style from './Header.module.css';

function Header() {
    return (
        <div className={style.header}>
            {/*// add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR} className={style.link} activeClassName={style.activeLink}>
                Pre-Junior
            </NavLink>
            <NavLink to={PATH.JUNIOR} className={style.link} activeClassName={style.activeLink}>
                Junior
            </NavLink>
            <NavLink to={PATH.PLUS_JUNIOR} className={style.link} activeClassName={style.activeLink}>
                Plus-Junior
            </NavLink>
            <div className={style.pages}>pages of home works</div>
        </div>
    )
}

export default Header
