import React from 'react';


export default function Nav(props) {
   return (
      <div id="reponsive-navbar" className='d-flex style-level0'>
        <div className='logo'>
           <img src={props.FyleIcon} alt='logo-icon' className='res-img'/>
        </div>
        <nav>
          <ul className='nav-list d-flex'>
            <li className='nav-item'><a href="#Features" className='nav-link'>Features</a></li>
            <li className='nav-item'><a href="#Team" className='nav-link'>Team</a></li>
            <li className='nav-item'><a href="#Sign" className='nav-link'>Sign In</a></li>
          </ul>
        </nav>
      </div>
   )
}