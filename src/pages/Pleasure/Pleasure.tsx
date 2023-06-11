import React, { useEffect, useState } from 'react'
import style from '../OurCoffe/OurCoffe.module.css'
import Nav from '../../layout/Nav/Nav'
import FooterDown from '../../layout/FooterDown/FooterDown'
import { ICoffe } from '../../modals'
import { services } from '../../services/services'
import CardItemAny from '../../components/CardItemAny/CardItemAny'
import Loading from '../../components/Loading/Loading'

import pleasureImg from '../../resources/img/pleasure-img.png'
import { useAppSelector } from '../../redux/hooks'

export default function Pleasure() {

    const [coffe, setCoffe] = useState<ICoffe[]>([])

    async function fetchCoffe() {
        const data = await services.getAllAny()
        setCoffe(data)
    }

    useEffect(() => {
        fetchCoffe()
    }, [])

  return (
    <>
        <div className={style.pleasure__body}>

            <Nav color='white'/>

            <div className="_container-main">
                <div className={style.our__pages}>
                    <h1>For your pleasure</h1>
                </div>
            </div>
        </div>

        <div className="_container-main">
            <div className={style.our__about}>
                <img src={pleasureImg} alt="about" />
                <div className={style.about__content}>
                    <h2 style={{textAlign: 'center'}}>About our goods</h2>
                    <FooterDown />
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <br />
                    <p>Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. </p>
                    <p>As greatly removed calling pleased improve an.</p>
                    <p>Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.</p>
                </div>
            </div>
            <div className={style.line}></div>

            <div className={style.our__content}>
                <div className={style.filteres}></div>
                <div className={style.our__items}>
                    {coffe.length ? (coffe.map(item => (
                            <CardItemAny key={item.id} item={item}/>
                        ))) : <Loading />}
                </div>
            </div>
        </div>
    </>
  )
}
