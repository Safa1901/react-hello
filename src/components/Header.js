import React from "react";
import s from './header.module.scss'
import { Link } from "react-router-dom";


const Header = (props) => (
  <header className={s.logo} >
      <ul className={s.menu}>
          <li>
            <Link to='/' className={s.menu__nav}>
              <p className={s.menu__title}>Home</p>            
            </Link>
          </li>
          <li>
            <Link to='/Order' className={s.menu__nav}>
              <p className={s.menu__title}>Map</p>
            </Link>
          </li>
          <li>
            <Link to='/Profile'  className={s.menu__nav}>
              <p className={s.menu__title}>Profile</p>            
            </Link>
          </li>
      </ul> 
  </header>
);

export default Header;