import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

export const Navbar = () => {

    const[menu,setMenu] = useState("shop");
    const{getTotalCartItems} = useContext(ShopContext);
    
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>TUPreneur</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("food")}}><Link style={{textDecoration: 'none'}}to='/food'>Food</Link>{menu==="food"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("clothes")}}><Link style={{textDecoration: 'none'}}to='/clothes'>Clothes</Link>{menu==="clothes"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("school")}}><Link style={{textDecoration: 'none'}}to='/school'>School</Link>{menu==="school"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
