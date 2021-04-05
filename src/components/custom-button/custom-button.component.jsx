import React from 'react';

import './custom-button.styles.scss';

import Button from 'react-bootstrap/Button';


const CustomButton = ({children, ...otherProps}) => (
    <Button variant="dark" {...otherProps}>
        {children}
    </Button>
);

export default CustomButton;
