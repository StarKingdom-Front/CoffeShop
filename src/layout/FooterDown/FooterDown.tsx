import React from 'react'
import { Link } from 'react-router-dom'
import footerBlackCoffe from '../../resources/img/coffe-black.png'

import style from './FooterDown.module.css'

export default function FooterDown() {
  return (
    <div>
        <div className="_container">
            <div className={style.footer__down}>
                <Link to="/"><img src={footerBlackCoffe} alt="coffe" /></Link>
            </div>
        </div>
    </div>
  )
}
