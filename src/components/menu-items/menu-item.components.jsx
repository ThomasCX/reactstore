import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss'
import Image from 'react-bootstrap/Image'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <Image className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} fluid
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);