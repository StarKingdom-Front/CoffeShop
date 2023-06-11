import React from 'react'
import style from './NotFound.module.css'
import Nav from '../../layout/Nav/Nav'

export default function NotFound() {
  return (
    <>
        <div className={style.pleasure__body}>

            <Nav color='white'/>
            
        </div>

        <div className='_content _container-main'
            style={{display: 'flex',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'        
        }}
        >
                <h1 style={{fontSize: '55px', color: '#000'}}>Not Found</h1>
        </div>
    </>
  )
}
