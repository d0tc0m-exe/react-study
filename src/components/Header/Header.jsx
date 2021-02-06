import React from 'react';
import logo from '../../static/images/logo.svg';
import classes from '../../static/css/Header/Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <header className={classes.header}>
        <ul className={classes.list}>
          <li><img className={classes.logo} alt="logo" src={logo}></img></li>
          <li><h1>JS Social Network</h1></li>
        </ul>
        <div className={classes.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    );
}

export default Header;