import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const buildControls = (props) => {
    return (
        < div className={classes.BuildControls} >
            <p> current price={props.price.toFixed(2)}</p>

            {

                controls.map(ctrl => (
                    <BuildControl key={ctrl.label} label={ctrl.label}
                        added={() => props.ingridientAdded(ctrl.type)}
                        removed={() => props.ingridientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />))

            }
            <button
                className={classes.OrderButton}
                disabled={!props.orderable}
                onClick={props.order}
            > Order Now</button>
        </div >
    );
}
export default buildControls;
