import React from 'react';
import sty from './Aside.module.css';
import {NavLink} from 'react-router-dom';

const Aside = () => {
  return (
    <div className={sty.aside}>
        <ul className={sty.list}>
          <li className={sty.item}><NavLink className={sty.link} to="/profile">Profile</NavLink></li>
          <li className={sty.item}><NavLink className={sty.link} to="/dialogs">Messages</NavLink></li>
          <li className={sty.item}><NavLink className={sty.link} to="/news">News</NavLink></li>
          <li className={sty.item}><NavLink className={sty.link} to="/music">Music</NavLink></li>
          <li className={sty.item}><NavLink className={sty.link} to="/settings">Settings</NavLink></li>
        </ul>
      </div>
);
  }

export default Aside;