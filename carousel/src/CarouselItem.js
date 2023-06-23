import React from 'react'

export const CarouselItem = ({item, index}) => {
  return (
    <div key={index} className='carousel-item' style={{ width: "100%" }}>
        <div></div>
        <img className='carousel-img' src={item.icon} alt={item.icon}/>
        <div className='carousel-item-text'>{item.description}</div>
    </div>
  )
}
