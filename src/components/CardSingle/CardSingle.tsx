import React, { useEffect, useState } from 'react'

import style from './CardSingle.module.css'
import Nav from '../../layout/Nav/Nav'
import FooterDown from '../../layout/FooterDown/FooterDown'
import { Link, useParams } from 'react-router-dom'
import { services } from '../../services/services'
import { ICoffe } from '../../modals'
import Loading from '../Loading/Loading'

export default function CardSingle() {

    const {id} = useParams()
    const [product, setProduct] = useState<ICoffe>({} as ICoffe)

    useEffect(() => {
        if(!id) return 
        const fetchData = async () => {
            const data = await services.getById(id)
            setProduct(data)
        }
        fetchData()
    }, [id])

    if(!product?.name) return <Loading />

  return (
    <>
        <div className={style.our__body}>

            <Nav color='white'/>

            <div className="_container-main">
                <div className={style.our__pages}>
                    <h1>Our Coffee</h1>
                </div>
            </div>
        </div>

        <div className='_container-main' style={{marginTop: '50px'}}>
            <Link to='/our-coffee' style={{ textAlign: 'left' }}>Back</Link>
        </div>



       <div>
            <div className='_container-main _content' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={style.single__body}>
                    <img className={style.img_card} src={product.picture} alt={product.country} />
                    <div className={style.single__content}>
                        <h2>About it</h2>
                        <FooterDown />
                        <p>Country: <span>{product.country}</span></p>
                        <p>Description:  <span>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat.</span>
                        </p>
                        <p>Price: <span>{product.price}$</span></p>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}
