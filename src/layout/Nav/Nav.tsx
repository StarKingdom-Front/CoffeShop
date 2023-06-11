import React, { useState } from 'react'

import logoHeader from '../../resources/img/logo__header.png'
import logoFooter from '../../resources/img/footer__logo.png'
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";


interface colorItem {
  color: string;
}


export default function Nav({color} : colorItem) {

  const [burgerMenu, setBurgerMenu] = useState(false)

  const imgColor = color === 'black' ? logoFooter : logoHeader;

  return (
    <div className={style.menu__body}>
        <div className='_container'>
          <div className={style.nav__body}>
              <nav className={style.nav__items}>
                <Link to='/'><img src={imgColor} alt="COFFE" /></Link>
                  <ul className={burgerMenu ? 'active' : ''}>
                      <Link to='/'><li>Coffee house</li></Link>
                      <Link to='/our-coffee'><li>Our coffee</li></Link>
                      <Link to='/for-your-pleasure'><li>For your pleasure</li></Link>
                  </ul>
              </nav>
          </div>
          <div className={style.mobile__btn}
            onClick={() => setBurgerMenu(!burgerMenu)}
          >
          {burgerMenu ? <AiOutlineCloseCircle size={25} color={'white'}/> : <CiMenuBurger size={25} color={'white'}/>}

          </div>
        </div>
    </div>
  )
}
