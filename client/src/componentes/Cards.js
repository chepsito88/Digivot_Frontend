import React from 'react'
import CardItems from './CardItems'
import '../Css/Cards.css'
import { MenuItemsHome } from "./carditemsHome"

function Card() {
    return (
        <div className='cards'>
            <h1>Conoce más acerca de nuestros servicios</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {MenuItemsHome.map((item, index) => {
                            return (
                                <CardItems src={item.src} text={item.text} label={item.label} path={item.path} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card
