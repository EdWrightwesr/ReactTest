import React from 'react'
import style from './ContentTwo.module.css'
import Star from './Star_rating.jsx'

import women from '../../assets/image/women.svg'
import images from '../../assets/image/img.svg'


const allStars =document.querySelectorAll('.star');

allStars.forEach((star, i) => {
    star.onclick = function() {
        let current_star_level = i + 1;
        allStars.forEach((star, j)=>{
            if( current_star_level >= j+1){
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }
        })
    }
})


const ContentTwo = () => {
    return <div className={style.Contents} >
                <div className={style.Contents__wrapper}>
                    <img className={style.images} src={women} alt="" />
                    <div className={style.Contents__block}>                    
                        <h2 className={style.Content__title}>Amazing Cosmetic</h2>       
                        <Star />
                        <p className={style.Contents__alltext}><span><img src={images} alt="" /></span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<span><img className={style.books} src={images} alt="" /></span></p>
                        <h2 className={style.Contents__text}>Rusmin Islam</h2>
                        <h2 className={style.Contents__textOne}>Designer</h2>
                    </div>  
                </div> 
            </div>
}

export default ContentTwo