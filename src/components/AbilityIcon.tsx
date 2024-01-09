import { click } from '@testing-library/user-event/dist/click';
import PropTypes, { string } from 'prop-types';
import React, { EventHandler, MouseEventHandler } from 'react';
import { Component, useState, useEffect } from 'react';
import '../styles/ability.css';

type sizeType = "small" | "large" | 'portrait';

interface props {
    imagePath: string,
    size?: sizeType,
    onClick?: MouseEventHandler
}

const AbilityIcon: React.FC<props> = function ({ imagePath, size, onClick }) {
    let width: string;
    let height: string;
    let borderWidth: String;
    switch (size) {
        case 'small': width = "100px"; height = "100px"; borderWidth = '5px'; break;
        case 'portrait': width = "250px"; height = "500px"; borderWidth = '8px'; break;
        default: width = "350px"; height = "350px"; borderWidth = '8px'; break;
    }


    const style = {
        width: `${width}`,
        height: `${height}`,
        borderWidth: `${borderWidth}`
    }


    return (
        <div className="ability-icon-container" style={style} onClick={onClick}>
            <img src={imagePath} />

        </div>
    )
}

export default AbilityIcon;