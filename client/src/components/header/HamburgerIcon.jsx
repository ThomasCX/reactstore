import React from 'react'

import './HamburgerIcon.styles';
import {ToggleButton, ToggleButtonLine} from "./HamburgerIcon.styles";


const HamburgerIcon = ({click}) => {
    return (
        <ToggleButton onClick={click}>
            <ToggleButtonLine/>
        </ToggleButton>
    );
}

export default HamburgerIcon;
