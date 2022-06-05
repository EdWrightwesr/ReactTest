import React from 'react';
import style from './Statistic.module.css'
import classNames from 'classnames'

const Statistic = () => {
    return <div className={style.Statistic}>
                <div className={style.Statistic__wrapper}>
                    <div className={style.Statistic__block}>
                        <h1 className={style.Statistic__title}>100%</h1>
                        <p className={style.Statistic__text}>Organic Products</p>
                    </div>
                    <div className={style.Statistic__block}>
                        <h1 className={style.Statistic__title}>2M+</h1>
                        <p className={style.Statistic__text}>Yearly Sales</p>
                    </div>
                    <div className={style.Statistic__block}>
                        <h1 className={style.Statistic__title}>1.9M+</h1>
                        <p className={style.Statistic__text}>Happy Customar</p>
                    </div>
                </div>
            </div>
}

export default Statistic