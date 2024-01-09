import React from "react";
interface props{
    attack:number,
    defense:number,
    difficulty: number,
    magic: number
}

const Stats:React.FC<props> = function({attack, defense, difficulty, magic}){
    return (
        <div className="stats-icon">
            <svg height="150" width="150">
          <path d={`M${75-7.5*magic} 75 L75 ${75-attack*7.5} L${75+defense*7.5} 75 L75 ${75+difficulty*7.5} Z`} 
            style={{strokeWidth: 10}}
          /></svg>
          <div className="attack-stat">Attack</div>
            <div className="defense-stat">Defense</div>
            <div className="difficulty-stat">Difficulty</div>
            <div className="magic-stat">Magic</div>
        </div>
    )
}

export default Stats;