import PropTypes from 'prop-types';
import React from 'react';
import { Component, useState, useEffect } from 'react';
import '../styles/ability.css';
import AbilityCard from './AbilityCard';
import AbilityRow from './AbilityRow';

const AbilitySelection:React.FC<{champion:any}> = function({ champion }) {
    //champion object
    const [currentAbility, setCurrentAbility] = useState();
    const [currentAbilityType, setCurrentAbilityType] = useState<number>(5);
    function printAbilityType(e:string){
        let type;

        switch(e){
            case '0': type=0; break;
            case '1': type=1;break;
            case '2': type=2;break;
            case '3': type=3;break;
            case '4': type=4; break;
            default: type=5; break;
        }
        setCurrentAbilityType(type);
    }

    useEffect( ()=>{
        if(currentAbilityType === 0){
            setCurrentAbility(champion.passive);
        }
        else{
            setCurrentAbility(champion.spells[currentAbilityType-1]);
        }
    }, [currentAbilityType]);




    return (
        <div className="ability-selection-container">
            <AbilityRow champion={champion} clickHander={printAbilityType}/>
            {currentAbility && <AbilityCard ability={currentAbility}/>}

        </div>
    )
}
export default AbilitySelection;