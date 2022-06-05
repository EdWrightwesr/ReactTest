import React from 'react';
import logo from '../../assets/image/Dudeshape.svg'
import style from './Header.module.css'
import profile from '../../assets/image/Profile.svg'
import buy from '../../assets/image/Buy.svg'
import frame from '../../assets/image/Frame.svg'
import burger from '../../assets/image/menu.png'
import classNames from 'classnames'


const Header = ({ onClick }) => {
    // onClick();
  
    return (
      <div className={style.Header}>
        <div className={style.wrapper}>
          <div className={style.Header__wrapper}>
            <div className={style.logo}>
              <img className={style.logo_img} src={logo} alt="" />
            </div>
            <div className={style.MenuBlock}>
              <ul className={style.menu}>
                <li className={style.menu__list}>
                  <a className={style.menu__link} href="">
                    Home
                  </a>
                </li>
                <li className={style.menu__list}>
                  <a className={style.menu__link} href="">
                    Products
                  </a>
                </li>
                <li className={style.menu__list}>
                  <a className={style.menu__link} href="">
                    About Us
                  </a>
                </li>
                <li className={style.menu__list}>
                  <a className={style.menu__link} href="">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className={style.nav}>
                <li className={style.nav__list}>
                  <a className={style.nav__link} href="">
                    <img src={profile} alt="" />
                  </a>
                </li>
                <li className={style.nav__list}>
                  <a className={style.nav__link} href="">
                    <img src={buy} alt="" />
                  </a>
                </li>
                <li className={style.nav__list}>
                  <a className={style.nav__link} href="">
                    <img src={frame} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.Burger} onClick={onClick}>
              <img className={style.images__burger} src={burger} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;