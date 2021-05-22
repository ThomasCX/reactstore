import React from 'react'
import {BackDrop} from "./BackDrop.styles";

const BackDropComponent = props => {
    return <BackDrop onClick={props.click}/>
}

export default BackDropComponent
