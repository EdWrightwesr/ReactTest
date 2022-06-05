import React from 'react';
import style from './Products.module.css'
import classNames from 'classnames'

import vector from '../../assets/image/Vector.svg'
import cream from '../../assets/image/cream.svg'
import pump from '../../assets/image/pump.png'


const Products = () => {
    return <div className={style.Products} >
                <div className={style.Products__wrapper}>
                    <h1 className={style.name}>Our Porular Product</h1>
                    <div className={style.page}>
                        <p className={style.page__text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <div className={style.link__block}>  
                            <a className={style.link} href="">Discover Our Products </a>
                            <img className={style.vector} src={vector} alt="" />
                        </div>
                    </div>
                    <div className={style.aside}>
                        <figure className={style.page__content}>
                            <div className={style.image__block}>
                                <img className={style.img__cream} src={pump} alt="" />
                            </div>
                            < figcaption className={style.text__block}>
                                <h2 className={style.head}>Cosmetic products</h2>
                                <p className={style.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                <div className={style.page__price}>
                                    <div className={style.page__button}>
                                        <a href='' className={style.buttonsOne}>Buy Now</a>
                                        <a href='' className={style.buttonsTwo}>Add To Cart</a>
                                    </div>
                                    <p className={style.price}>$120</p>
                                </div>
                            </figcaption>
                        </figure>
                        <figure className={style.page__content}>
                            <div className={style.image__block}>
                                <img className={style.img__cream} src={cream} alt="" />
                            </div>
                            <figcaption className={style.text__block}>
                                <h2 className={style.head}>Cosmetic products</h2>
                                <p className={style.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                <div className={style.page__price}>
                                    <div className={style.page__button}>  
                                        <a href='' className={style.buttonsOne}>Buy Now</a>
                                        <a href='' className={style.buttonsTwo}>Add To Cart</a>                        
                                    </div>
                                    <p className={style.price}>$120</p>
                                </div>
                            </ figcaption>
                        </figure>
                    </div>
                    
                </div>
            </div>
}

export default Products