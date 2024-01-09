import PropTypes from 'prop-types';
import { Component, useState, useEffect } from 'react';
import '../styles/ability.css';
import AbilityIcon from './AbilityIcon';
import AbilityText from './AbilityText';
import * as constants from "../assets/Constants";
import React from 'react';


const AbilityCard:React.FC<{ability:any}> = function({ability}){
    //give data, does the logic to get the image and text. 
    //give ability object? does not check if it is passive or not

    
    const [abilityImg, setAbilityImg] = useState<string>('');
    const [abilityTitle, setAbilityTitle] = useState<string>('');
    const [abilityText, setAbilityText] = useState<string>('');


    //test to see what happens when you remove this and just set the values are the start
    useEffect( () =>{
        setAbilityTitle(ability.name);
        setAbilityText(ability.description);
        
        if(ability.image.group === "spell"){
            setAbilityImg(constants.ABILITY_URL + `/${ability.image.full}`);
        }
        else{
            setAbilityImg(constants.PASSIVE_URL + `/${ability.image.full}`);
        }
    }, [ability]);

    const dimentions:{height:number,width:number,paddingTop?:string} = {
        height: 100,
        width:100,
    }
    if(true){
    dimentions.paddingTop = '100px';
    }

    return(
        <div className='ability-card'>
            <AbilityIcon  size="large" imagePath={abilityImg}/>
            <AbilityText name={abilityTitle} text={abilityText} />
        </div>
    )
}
AbilityCard.propTypes = {
    ability: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.shape({
            full: PropTypes.string,
            group: PropTypes.string,
        }),
    }),
}
export default AbilityCard;