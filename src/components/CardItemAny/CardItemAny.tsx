import React from 'react'
import style from './CardItemAny.module.css'
import { ICoffe } from '../../modals'
import { Link } from 'react-router-dom'

interface IItem {
  item: ICoffe
}

export default function CardItemAny({item} : IItem) {
  return (
    <>
        <Link to={`/coffe/${item.id}`}>
            <div className={style.card__body}>
                    <img src={item.picture} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
            </div>
        </Link>
    </>
  )
}
