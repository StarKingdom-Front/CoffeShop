import React from 'react'

import style from './FilterCountry.module.css'

export default function FilterCountry({value, onClickCategory} : {onClickCategory: any, value: number}) {

    const filterItem: string[] = ['All', 'Kenya', 'Columbia']

  return (
    <>
        <div className={style.filter__boy}>
            <p>Or filter</p>
            <ul>
                {filterItem.map((item, index) => (
                    <li
                        key={index}
                        className={value === index ? 'search__active' : '' }
                        onClick={() => onClickCategory(index)}
                    >{item}</li>
                ))}
            </ul>
        </div>
    </>
  )
}
