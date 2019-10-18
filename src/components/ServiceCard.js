import React from 'react'

const ServiceCard = ({service : {background, category, title, image}}) =>
  <div className='service-card' style={{background: background}}>
    <p className='category'>{category}</p>
    <h1 className='title'>{title}</h1>
    <img className='screenshot' src={image}/>
  </div>
  
export default ServiceCard

