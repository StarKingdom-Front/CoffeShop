import React, { useEffect, useMemo, useState } from 'react'

import style from './Home.module.css'
import FooterDown from '../../layout/FooterDown/FooterDown'
import Nav from '../../layout/Nav/Nav'
import { Link } from 'react-router-dom'
import CardItem from '../../components/CardItem/CardItem'
import axios from 'axios'
import { ICoffe } from '../../modals'
import Loading from '../../components/Loading/Loading'
import { services } from '../../services/services'
import { useAppSelector } from '../../redux/hooks'


export default function Home() {

    const [coffe, setCoffe] = useState<ICoffe[]>([])

    async function fetchCoffe() {
        const data = await services.getAllAny()
        setCoffe(data)
    }

    useEffect(() => {
        fetchCoffe()
    }, [])

    const coffeRecommended = coffe.filter(item => item.recommended === true)

  return (
    <>
        <div className={style.home__body}>

            <Nav color='white'/>

            <div className="_container-main">
                <div className={style.home__pages}>
                    <h1>Everything You Love About Coffee</h1>
                    <FooterDown />
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                    <Link to='our-coffee' className='btn'>More</Link>
                </div>
            </div>
        </div>

        <div className="_container-main">
            <div className={style.home__about}>
                <h2>About Us</h2>
                <FooterDown />
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.</p>
                <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
horrible but confined day end marriage. Eagerness furniture set preserved far
recommend. Did even but nor are most gave hope. Secure active living depend son
repair day ladies now.</p>
            </div>
        </div>

       <div className={style.best__body}>
            <div className="_container-main">
                <div className={style.home__ourbest}>
                    <h2>Our best</h2>
                    <div className={style.best__items}>
                        {coffeRecommended.length ? (coffeRecommended.map(item => (
                            <CardItem key={item.id} item={item}/>
                        ))) : <Loading />}
                    </div>
                </div>
            </div>
       </div>
    </>

    
  )
}
