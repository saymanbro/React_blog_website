import React from 'react';
import {menuItem} from './menuItem.js';
import {Link} from 'react-router-dom'
import './Navbar.css'
import {SocialIcons} from './socialIcons.js'
const Navbar = () => {
    return (
        <div className='navbar_container'>
            <nav className="navbar">
                <h1 className="brand_logo">Daily News</h1> 
             
                <ul className="nav_menu">
                   {
                       menuItem.map((item, index) => {
                           return(
                            <li key={index}>
                                <Link to={item.path} className={item.cName}> {item.text}</Link>
                            </li>
                           )
                           
                       }
                       )}

                </ul>
                <ul className="nav_icon_div">
                    {
                        SocialIcons.map((icons,index) => {
                           return(
                            <li key={index}>
                                <Link className={icons.cName}>{icons.icon}</Link>
                            </li>
                           )
                        }
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;