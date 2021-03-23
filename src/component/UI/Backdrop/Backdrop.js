import React from 'react'
import Classes from './Backdrop.css'

const backdrop = (props) => (
    props.show ? <div className={Classes.Backdrop} onClick={props.orderCancel}></div> : null
)
export default backdrop