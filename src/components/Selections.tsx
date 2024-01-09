import React, { useEffect, useState } from "react"
import ChampionIcon from "./ChampionIcon";
import ChampionToolTip from "./ChampionToolTip";
import * as constants from '../assets/Constants'
import '../styles/champion.css'


const Selections: React.FC<{ championData: any }> = function ({ championData }) {
    const [hoverChamp, setHoverChamp] = useState<string>();
    const [displayTooltip, setDisplayTooltop] = useState<boolean>(false);
    let championNames: string[] = [];
    for (let champ in championData) {
        championNames.push(champ);
    }

    function updateToolTip(n:string){
        setHoverChamp(n);
        setDisplayTooltop(true);
    }

    return (
        <>
            <div className="selection-wrapper">
                {championNames.map(n => (
                    <div onMouseEnter={() => updateToolTip(n)} onMouseLeave={() => setDisplayTooltop(false)} key={n}><ChampionIcon key={n} href={`champion/${n}`} name={championData[n].name} imgPath={`${constants.SQUARE_IMG_URL}/${championData[n].image.full}`} />  </div>
                ))}
            </div>
            {displayTooltip && <ChampionToolTip name={hoverChamp} />}
        </>
    )
}

export default Selections;