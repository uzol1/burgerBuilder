import React from 'react';
import BurgerIngredent from './BurgerIngrident/BurgerIngrident';
import classes from './Burger.css'

const burger = (props) => {

    let activeIngridients = Object.keys(props.ingridients).map(igkey => {
        return [...Array(props.ingridients[igkey])].map((_, i) => {
            return <BurgerIngredent key={igkey + i} type={igkey} />
        })
    }).reduce((cur, next) => {
        return cur.concat(next)
    })


    if (activeIngridients.length === 0) {
        activeIngridients = <p>please start adding ingridients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredent type='bread-top' />
            {activeIngridients}
            <BurgerIngredent type='bread-bottom' />
        </div>
    );
};
export default burger;
