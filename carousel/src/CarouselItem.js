import React from 'react'

export const CarouselItem = ({item}) => {
  return (
    <div className='carousel-item' style={{ width: "100%" }}>
        <img className='carousel-img' src={item.icon} alt={item.icon}/>
        <div className='carousel-item-text'>{item.description}</div>
    </div>
  )
}
