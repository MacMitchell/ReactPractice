import PropTypes from 'prop-types';
import { Component, useState, useEffect } from 'react';
import * as constants from '../assets/Constants';
import React from 'react';
import '../styles/overall.css'
import DownArrow from './DownArrow'
interface props {
    imgPath?: string,
    arrow?: boolean,
    size?:string
}
export const smallSize = {width:450, height: 270};

const Banner: React.FC<props> = function ({ imgPath, arrow = false, size }) {
    return (
        <div className={`banner`}  style={size === 'small'? {width: `${smallSize.width}px`} : {}}>
            <img src={imgPath} />
            {arrow && <div className='banner-downarrow'>
                <DownArrow size={'small'} />
            </div>}
        </div>
    )
}

export default Banner;