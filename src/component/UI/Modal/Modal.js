import React from 'react'
import classes from './Modal.css'
import Aux from '../../../HOC/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} orderCancel={props.orderCancel} />
        <div className={classes.Modal}
            style={{ transform: props.show ? 'translateY(0)' : 'translateY(100vh)' }}>
            {props.children}
        </div>
    </Aux>

)
export default Modal