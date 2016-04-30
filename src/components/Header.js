import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <nav>
  
    <Link className={classes.link} to='/identify' activeClassName={classes.activeRoute}>
      Identify
    </Link>
    {' · '}
    <Link className={classes.link} to='/track' activeClassName={classes.activeRoute}>
      Track
    </Link>
    {' · '}
    <Link className={classes.link} to='/alias' activeClassName={classes.activeRoute}>
      Alias
    </Link>
  </nav>
)

export default Header
