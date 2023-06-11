import React, { useEffect, useState } from 'react'

import style from './OurCoffe.module.css'
import Nav from '../../layout/Nav/Nav'
import FooterDown from '../../layout/FooterDown/FooterDown'

import imgAbout from '../../resources/img/our-page-img.jpg'
import { services } from '../../services/services'
import { ICoffe } from '../../modals'
import CardItemAny from '../../components/CardItemAny/CardItemAny'
import Loading from '../../components/Loading/Loading'
import FilterCountry from '../../components/FilterCountry/FilterCountry'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setCategoryId } from '../../redux/Slice/filterSlice'


export default function OurCoffe() {

    const categoryId = useAppSelector(state => state.filterSlice.categoryId);
    const dispatch = useAppDispatch()

    const [coffe, setCoffe] = useState<ICoffe[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    async function fetchCoffe() {
        const data = await services.getAll(categoryId)
        setCoffe(data)
    }

    useEffect(() => {
        fetchCoffe()
    }, [categoryId])

    const onClickCategory = (id: number) => {
        dispatch(setCategoryId(id));
    }

   
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

        <div className="_container-main">
            <div className={style.our__about}>
                <img src={imgAbout} alt="about" />
                <div className={style.about__content}>
                    <h2 style={{textAlign: 'center'}}>About our beans</h2>
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
                <div className={style.filteres}>
                    <SearchPanel 
                        value={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <FilterCountry value={categoryId} onClickCategory={
                        onClickCategory
                    }/>
                </div>
                <div className={style.our__items}>
                     {coffe.length ? (coffe.filter((item) => {
                        return searchTerm.toLowerCase() === ''
                        ? item
                        : item.name.toLowerCase().includes(searchTerm)
                     })
                     
                     
                     .map(item => (
                            <CardItemAny key={item.id} item={item}/>
                        ))) : <Loading />}
                </div>
            </div>
        </div>
    </>
  )
}
