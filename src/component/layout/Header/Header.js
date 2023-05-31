import React from 'react';
import { Link } from 'react-router-dom';

import { TbCat } from 'react-icons/tb';
import { TbDog } from 'react-icons/tb';
import { TbSearch } from 'react-icons/tb';
// import { TbHeart } from "react-icons/tb";
import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.header_wrap}>
          <div className={style.logo_wrapper}>
            <div className={style.logo}>
              <TbCat size="2rem" />
              <TbDog size="2rem" />
            </div>
          </div>
          <ul className={style.header_navBar}>
            <li className={style.navBar_item}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.navBar_item}>
              <Link to="/pets">Pets</Link>
            </li>
            <li className={style.navBar_item}>
              <Link to="/process/donate">Donate</Link>
            </li>
            <li className={style.navBar_item}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={style.navBar_item}>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className={style.header_actions}>
            <div id="header_search">
              <Link to="/search">
                {/* <button className={style.header_search}> */}
                <TbSearch size="2rem" />
                {/* </button> */}
              </Link>
            </div>
            {/* <button className={style.headers_likes}>
            <TbHeart size="2rem" />
            </button> */}
            <Link to="/login">
              <button className={style.header_logIn}>LogIn</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
