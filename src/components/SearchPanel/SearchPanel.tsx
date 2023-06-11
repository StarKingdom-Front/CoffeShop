import React from 'react'
import style from './SearchPanel.module.css'

interface Isearch {
  value: string
  setSearchTerm: any
}

export default function SearchPanel({value, setSearchTerm} : Isearch) {



  return (
    <>
        <div className={style.seachBody}>
            <p>Lookiing for</p>
            <input type="text" 
                   name=''
                
                   onChange={e => setSearchTerm(e.target.value)}
                   placeholder='start typing here...'
                   />
        </div>
    </>
  )
}
