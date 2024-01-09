import React from 'react';
import PropTypes from 'prop-types';
import { Component, useState, useEffect } from 'react';
import * as constants from '../assets/Constants';

import '../styles/ability.css';
const AbilityText:React.FC<{name:string, text:string}> =function({name, text}){
    return(
        <div className="ability-text-container">
            <h4 className="ability-name">{name}</h4>
            <div className='ability-body'>{constants.convertMarkdownToText(text)}</div>
        </div>
    )
}
export default AbilityText;