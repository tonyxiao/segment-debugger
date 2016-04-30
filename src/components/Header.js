import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <nav>
    <Link to='/identify' activeClassName={classes.activeRoute}>
      Identify
    </Link>
    {' · '}
    <Link to='/track' activeClassName={classes.activeRoute}>
      Track
    </Link>
    {' · '}
    <Link to='/alias' activeClassName={classes.activeRoute}>
      Alias
    </Link>
    {' · '}
    <Link to='/page' activeClassName={classes.activeRoute}>
      Page
    </Link>
    {' · '}
    <Link to='/group' activeClassName={classes.activeRoute}>
      Group
    </Link>
  </nav>
)

export default Header
