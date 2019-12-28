import React from 'react';
import logo from './logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
      <header className={classes.header}>
        <ul className={classes.list}>
          <li><img className={classes.logo} alt="logo" src={logo}></img></li>
          <li><h1>JS Social Network</h1></li>
        </ul>
      </header>
    );
}

export default Header;