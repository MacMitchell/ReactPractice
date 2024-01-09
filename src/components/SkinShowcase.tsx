import React, { useEffect, useState } from "react";
import Gallary3D from "./Gallary3D";
import * as constants from '../assets/Constants'
import AbilityIcon from "./AbilityIcon";
import DownArrow from "./DownArrow";

const SkinShowcase: React.FC<{ champion: any }> = function ({ champion }) {
    const [skins, setSkins] = useState<string[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [skinName, setSkinName] = useState<string>('');
    useEffect(() => {
        setSkins(getSkins());
    }, [champion])

    useEffect(() => {
        setSkinName(champion.skins[index].name)
    }, [index])
    return (
        <>
            <div className="showcase-container">
                <div className="showcase">
                    <div className="showcase-header">
                        <DownArrow direction="west" />
                        <div className="skin-title">
                            {skinName}
                        </div>
                        <DownArrow direction="east" />
                    </div>
                    <Gallary3D setActive={setIndex}>
                        {skins.map(skin => (
                            <AbilityIcon key={skin} imagePath={skin} size={'portrait'} />
                        ))}
                    </Gallary3D>
                </div>
            </div>
        </>
    )


    function getSkins() {
        let skinLinks: string[] = [];
        let skins = champion.skins;
        for (let skin of skins) {
            skinLinks.push(`${constants.LOADING_URL}/${champion.id}_${skin.num}.jpg`);
        }
        return skinLinks;
    }
}

export default SkinShowcase;