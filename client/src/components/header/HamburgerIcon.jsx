import React from 'react'

import './HamburgerIcon.styles';
import {ToggleButton, ToggleButtonLine} from "./HamburgerIcon.styles";


const HamburgerIcon = props => {
    return (
        <ToggleButton onClick={props.click}>
            <ToggleButtonLine/>
        </ToggleButton>
    );
}

export default HamburgerIcon;
