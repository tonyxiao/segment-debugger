import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <nav>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
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
