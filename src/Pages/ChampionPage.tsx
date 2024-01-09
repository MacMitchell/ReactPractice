import * as contant from "../assets/Constants";
import PropTypes from 'prop-types';
import { Component, useState, useEffect } from 'react';
import '../styles/ability.css';
import AbilitySelection from "../components/AbilitySelection";
import React from "react";
import Opening from "../components/Opening";
import SkinShowcase from "../components/SkinShowcase";
import LargeTextBlurb from "../components/LargeTextBlurb";
import { useFetch } from "../Hooks/useFetch";
import Logo from "../components/Logo";
import MusicPlayer from "../components/MusicPlayer";
import ChampionData from '../assets/ChampionData.json'

//a comment
const ChampionPage: React.FC = function () {
    const currentPage = document.URL.split('/').pop();
    let name = 'Bard';
    if (currentPage != undefined) {
        name = currentPage;
    }

    const [champion, error, loading] = useFetch(name);
    let imagePath: string = '';


    if (loading) return <div>"Loading..."</div>
    if (!champion) {
        return <div>"Loading...";</div>
    }
    let themeData:any = ChampionData;

   
    const key = champion.name as keyof typeof ChampionData;
    let r:HTMLElement | null = document.querySelector(':root');
    if(themeData[key] && themeData[key].theme && r){
        r.style.setProperty('--background', themeData[key].theme.background);
        r.style.setProperty('--font-color', themeData[key].theme['font-color']);
        r.style.setProperty('--border-color', themeData[key].theme['border-color']);
        r.style.setProperty('--accent-color', themeData[key].theme['accent-color']);
        r.style.setProperty('--accent-shadow', themeData[key].theme['accent-shadow']);
    }
    

    return (
        <div className="Home">

            <Opening champion={champion} />
            <div className="champion-body">

                <AbilitySelection champion={champion} />
                <LargeTextBlurb text={champion.lore} />
                <SkinShowcase champion={champion} />
                <Logo />
            </div>
            <MusicPlayer champion={champion.name} />
        </div>
    )
}

export default ChampionPage;