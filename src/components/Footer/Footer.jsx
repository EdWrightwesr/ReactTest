import React from 'react';
import style from './Footer.module.css'


import logo from '../../assets/image/Dudeshape.svg'
import facebook from '../../assets/image/facebook.svg'
import twitter from '../../assets/image/twitter.svg'
import instagram from '../../assets/image/instagram.svg'


const Footer = () => {
    return <div className={style.Footer}>
                <div className={style.Footer__wrapper}>
                    <div className={style.itemOne}>
                        <h1 className={style.headline}>Subscribe to Get Our Letest News</h1>
                        <div className={style.searchBlock}>
                            <input className={style.search} type="text" placeholder='Enter email' />
                            <input className={style.submit} type="button" value='Subscribe' />
                        </div>
                    </div>
                    <hr />
                    <div className={style.itemTwo}>
                        <div className={style.blockOne}>
                            <div className={style.logo}>
                                <img className={style.logo__img} src={logo} alt="" />
                            </div>
                            <p className={style.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>
                        <div className={style.blockTwo}>
                            <h2 className={style.article}>Quick Link</h2>
                            <ul>
                                <li><a href=''>Home</a></li>
                                <li><a href=''>Products</a></li>
                                <li><a href=''>About Us</a></li>
                            </ul>
                        </div>
                        <div className={style.itemThree}>
                            <h2 className={style.article}>Contact Us</h2>
                            <ul>
                                <li>oyasimnaeem@email.com</li>
                                <li>+123456789</li>
                            </ul>
                            <div className={style.item__img}>
                                <a href=""><img src={facebook} alt="" /></a>
                                <a href=""><img src={twitter} alt="" /></a>
                                <a href=""><img src={instagram} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Footer