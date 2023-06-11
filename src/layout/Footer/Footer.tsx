import React from 'react'
import Nav from '../Nav/Nav'

import style from './Footer.module.css'
import FooterDown from '../FooterDown/FooterDown'



export default function Footer() {
  return (
    <div className={style.footer__body}>
        <Nav color="black"/>
        <FooterDown />
    </div>
  )
}
