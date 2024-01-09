import React from "react";
import '../styles/champion.css'
const ChampionIcon: React.FC<{ imgPath: string, href?: string, name?: string }> = function ({ imgPath, href, name }) {
    return (
        <div className="champion-icon-container">

            <div className="champion-pic-container">
                <a href={href}><img src={imgPath} /></a>
            </div>
            <p>{name}</p>
        </div>
    )
}

export default ChampionIcon;