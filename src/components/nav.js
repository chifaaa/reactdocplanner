
import React from 'react'
// 
//         <li>About us</li>
//         <li style={{color:'rgb(116,116,116)'}}>Career</li>
//         <li style={{color:'rgb(116,116,116)'}}>Departments</li>
// 
const Nav = (props) =>
<header>
<h1>
<img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"alt="Docplanner Group" />
</h1>
<nav>
<ul className="main-menu">
{props.menu.map((el, i) =><li key={i} ><a href={el.target} ><span style={{color: el.isvisited ? '#6bb09d' : 'rgb(100, 100, 100)'}}>{el.name}</span></a></li>)}
</ul>
</nav>
</header>
export default Nav