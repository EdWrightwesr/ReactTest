import React from 'react'
import style from './Logotips.module.css'

import air from '../../assets/image/air.svg'
import hubsport from '../../assets/image/hubsport.svg'
import google from '../../assets/image/google.svg'
import microsoft from '../../assets/image/microsoft.svg'
import walmart from '../../assets/image/walmart.svg'
import fedex from '../../assets/image/fedex.svg'



const Logotips = () => {
    return <div className={style.Logotips} >
                <div className={style.Logotips__wrapper}>
                    <ul className={style.menu__logotips}>
                        <li className={style.menu__list}><a className={style.menu__link} href=""><img className={style.img__sing} src={air} alt="" /></a></li>
                        <li className={style.menu__list}><a className={style.menu__link} href=""><img className={style.img__sing} src={hubsport} alt="" /></a></li>
                        <li className={style.menu__list}><a className={style.menu__link} href=""><img className={style.img__sing} src={google} alt="" /></a></li>
                        <li className={style.menu__list}><a className={style.menu__link} href=""><img className={style.img__sing} src={microsoft} alt="" /></a></li>
                        <li className={style.menu__list}><a className={style.menu__link} href=""><img className={style.img__sing} src={walmart} alt="" /></a></li>
                        <li className={style.menu__list}><a className={style.menu__link} href=""><img className={style.img__sing} src={fedex} alt="" /></a></li>
                    </ul>
                </div> 
            </div>
}

export default Logotips