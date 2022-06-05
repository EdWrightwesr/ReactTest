import React from 'react';
import style from './Burger.module.css'
import profile from '../../assets/image/Profile.svg'
import buy from '../../assets/image/Buy.svg'
import frame from '../../assets/image/Frame.svg'
import classNames from 'classnames'

const Burger = ({ isOpen }) => {
    let boxClasses = [style.box];
    let burgerClasses = [style.Burger];
    if (isOpen) {
      boxClasses.push(style.wrapper__active);
      burgerClasses.push(style.active);
    }
  
    return (
      <div className={burgerClasses.join(" ")}>
        <div className={boxClasses.join(" ")}>
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
      </div>
    );
  };
  
export default Burger;