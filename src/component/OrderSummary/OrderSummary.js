import React from 'react';
import Aux from '../../HOC/Auxiliary';
import Button from '../../component/UI/Button/Button'
const orderSummary = (props) => {
    const ingridienSummary = Object.keys(props.ingridients).map((igkey) => (
        <li key={igkey}>{igkey} : {props.ingridients[igkey]}</li>
    ))
    return (
        <Aux>
            <h3>your order</h3>
            <p>A delicious burger with following ingridients:</p>
            <ul>
                {ingridienSummary}
            </ul>
            <p>the total price is : {props.totalPrice.toFixed(2)}</p>
            <p>do you want to continue ? </p>
            <Button clicked={props.cancelOrder} btnType='Danger'>cancel</Button>
            <Button clicked={props.continueOrder} btnType='Success' >continue</Button>

        </Aux >
    )
}
export default orderSummary;
