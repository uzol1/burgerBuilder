import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
const navigationitems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact >burger builder</NavigationItem>
        <NavigationItem link="/orders"  >Orders</NavigationItem>
    </ul>

)
export default navigationitems