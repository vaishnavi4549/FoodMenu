import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
const Navbar =()=>{
    return(
        <div className="menu">
                <nav>
                <ul>
                <li><Link to="/home" >Home</Link></li>
                <li><Link to="/breakfast">Breakfast</Link></li>   
                <li> <Link to="/lunch">Lunch</Link></li>
                <li> <Link to="/Sweets">Sweets</Link></li>
                </ul>
                </nav>
            </div>
    );
}
export default Navbar;