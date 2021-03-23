import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Aux from '../../../HOC/Auxiliary'
import BackDrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let combinedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        combinedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <BackDrop show={props.open} orderCancel={props.closed} />
            <div className={combinedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;