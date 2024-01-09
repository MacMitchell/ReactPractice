import React, { useEffect, useState } from "react"
import ChampionData from '../assets/ChampionData.json'
const MusicPlayer: React.FC<{champion:string}> = function ({champion="Jhin" }) {

    const [url, setUrl] = useState<string>('');
    useEffect( ()=>{
        let musicData: any = ChampionData;
        const key = champion as keyof typeof ChampionData;
        if(musicData[key] && musicData[key].music){
        setUrl(`https://www.youtube.com/embed/${musicData[key].music}?controls=0&autoplay=1&loop=1`)
        }
    },[champion])
    
    return (
        <><iframe width="0" height="0" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>
    )
}

export default MusicPlayer