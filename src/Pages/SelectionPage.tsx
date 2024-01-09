import React, { useState, useEffect } from "react";
import axios from "axios";
import Selections from "../components/Selections";
const SelectionPage: React.FC<{}> = function ({ }) {
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, cyan, blue)';

    const [championList, setChampionList] = useState();

    useEffect(() => {
        window.fetch('http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json').then(response => {
            response.json().then(responseJ => {
                setChampionList(responseJ.data);
            })
        })
    }, []);

    if(!championList) return <div>"Loading...";</div>
    return (<>
         <Selections championData={championList}/>
    </>
    )
}

export default SelectionPage;