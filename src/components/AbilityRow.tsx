import PropTypes from 'prop-types';
import { Component, useState, useEffect } from 'react';
import '../styles/ability.css';
import AbilityIcon from './AbilityIcon';
import * as constants from '../assets/Constants';
import React from 'react';


interface props {
    champion: any
    clickHander: Function
}

const AbilityRow: React.FC<props> = function ({ champion, clickHander }) {

    const [imgLoc, setImgLoc] = useState<{ link: string, type: string }[]>();
    useEffect(() => {
        let counter = 0;
        let p = {
            link: constants.PASSIVE_URL + `/${champion.passive.image.full}`,
            type: counter + ''
        }
        counter++;

        let abilitys = [];
        for (let spell of champion.spells) {
            abilitys.push({
                link: `${constants.ABILITY_URL}/${spell.image.full}`,
                type: counter + ''
            });
            counter++

        }
        setImgLoc([p, ...abilitys]);
    }, [champion])


    function abilityClickHander(abilityName: string) {
        const getAbility = function () {
            clickHander(abilityName);
        }
        return getAbility;
    }

    if (!imgLoc) {
        return <></>
    }

    return (
        <div className='ability-row'>
            
                {imgLoc.map(e => ( <div className='row-icon' key={e.link}><AbilityIcon  imagePath={e.link} onClick={abilityClickHander(e.type)} size="small" /> </div>))}
            
        </div>
    )
}
export default AbilityRow;