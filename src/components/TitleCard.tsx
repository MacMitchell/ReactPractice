import React  from "react";
import '../styles/overall.css'

interface props{
    name?: string,
    blurb?: string
}

const TitleCard:React.FC<props> = function({name, blurb}){
    return (
        <div className="titlecard">
            {name &&<div className="titlecard-header">{name} </div>}
            {blurb && <div className="titlecard-blurb">{blurb}</div>}
        </div>
    )
}

export default TitleCard;