import React from 'react'
import style from './Content.module.css'

import cream from '../../assets/image/cosmetic.svg'





const Content = () => {
    return <div className={style.Contents} >
                <div className={style.Contents__wrapper}>
                    <div className={style.Contents__block}>
                        <h1 className={style.Content__title}>The Perfect Beauty Of You</h1>
                        <p className={style.Contents__text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className={style.Contents__text}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href='' className={style.buttons}>Shop Now</a>
                    </div>
                    <img className={style.image} src={cream} alt="" />
                </div> 
            </div>
}

export default Content