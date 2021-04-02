import React from 'react';

import './menu-item.styles.scss'
import Image from 'react-bootstrap/Image'

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <Image className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} fluid/>
        {/*<div*/}
        {/*    className='background-image'*/}
        {/*    style={{*/}
        {/*        backgroundImage: `url(${imageUrl})`*/}
        {/*    }}*/}
        {/*/>*/}
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)


export default MenuItem;
