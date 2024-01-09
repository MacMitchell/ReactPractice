
import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import TitleCard from "./TitleCard";
import * as constant from '../assets/Constants'

const Opening: React.FC<{ champion: any }> = function ({ champion }) {
    const [imgPath, setImgPath] = useState<string>();


    useEffect(() => {
        setImgPath(`${constant.SPLASH_URL}/${champion.id}_0.jpg`)
    }, [champion])
    return (
        <>
            <Banner imgPath={imgPath} arrow={true} />
            <TitleCard name={champion.name} blurb={champion.title} />
        </>
    )
}


export default Opening