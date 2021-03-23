import React from 'react'
import classes from './toolbar.css'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo></Logo>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)
export default toolbar;