import React from 'react';
import style from './Articles.module.css'
import classNames from 'classnames'

import cream from '../../assets/image/cream.png'



const Articles = () => {
    return <div className={style.Articles}>
                <div className={style.Article__wrapper}>
                    <div className={classNames(style.container, style.itemOne)}>
                        <h1 className={style.headline}>Get Your Best Cosmetic Products Here</h1>
                        <p className={style.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <div className={style.searchBlock}>
                            <input className={style.search} type="text" placeholder='Search...' />
                            <input className={style.submit} type="" />
                        </div>
                        <a href='' className={style.buttons}>Shop Now</a>
                    </div>
                </div>
                <div className={style.imageJar}><img src={cream} alt="" /></div>
            </div>
}

export default Articles