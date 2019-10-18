import React from 'react'
import {Button} from './button.js'
export const PostCard = (props) =>{
return(
    <div className='postcardsdiv' style={{paddingLeft:'200px',paddingRight:'200px' }}>
{props.postcardprop.map((el, i) =>
<div key={i} className="last-section-box">
                        <img src={el.photo} style={{borderRadius: '5px'}}/>
                        <div style={{display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
                            <p style={{
                                FontFamily:'Helvetica Neue',
                                FontSize: '18px',
                                FontWeight: '400',
                                LineHeight: '30px',
                                color: 'rgb(116, 116, 116)'}}>{el.city}</p> 
                                <Button/>

                        </div>
</div>)}
</div>
)
}
// {props.postcardprop.map((el, i) =><li  ><a href={el.target} ><span style={{color: el.isvisited ? '#6bb09d' : 'rgb(100, 100, 100)'}}>{el.name}</span></a></li>)}

