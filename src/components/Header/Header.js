import React from "react";
import s from './header.module.scss'

const Header = (props) => (
  <header className={s.logo}>
    <nav>
      <ul className={s.menu}>
        {props.pages.map((page) => (
          <li className={s.menu__nav}>
            <button
              className={s.menu__title}
              onClick={() => props.onPressed(page.component)}
            >
              {page.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;