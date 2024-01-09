import React, { ReactEventHandler, useEffect, useState } from "react";
import Banner from "./Banner";
import * as Constant from '../assets/Constants'
import { number } from "../../storybook-static/63.90df68ed.iframe.bundle";
import '../styles/overall.css'
import { smallSize } from "./Banner";
import { useFetch } from "../Hooks/useFetch";
import ChampionIconStories from "../stories/ChampionIcon.stories";
import Stats from "./Stats";



const ChampionToolTip: React.FC<{ name: string | undefined }> = function ({ name }) {

    const [position, setPosition] = useState<{ top: number, left: number }>();
    const [champion, error, loading] = useFetch(name ? name : '');


    function getMousePos(e: MouseEvent) {
        let y = e.clientY + window.scrollY - smallSize.height;

        if (y < window.scrollY) {
            y = e.clientY + window.scrollY;
        }

        let x = e.clientX + 25;
        if (x + smallSize.width > window.innerWidth) {
            x = e.clientX - smallSize.width - 25;
        }
        setPosition({ left: x, top: y })

    }


    useEffect(() => {
        if (name) {
            window.addEventListener('mousemove', getMousePos)
        }

        return () => {
            window.removeEventListener('mousemove', getMousePos)
        }
    }, [name])

    if (!name || loading || error) return <></>

    return (
        <div className="hover-banner" style={position}>
            <Banner size={'small'} imgPath={`${Constant.SPLASH_URL}/${name}_0.jpg`} />
            <div className="info">
                <div className="tooltip-type-container">
                    {champion.tags.map((n: string, index: number) => (
                        <div key={index}>{n} </div>
                    ))}
                </div>
                <div className="champion-stats">
                    <Stats attack={champion.info.attack} defense={champion.info.attack} difficulty={champion.info.difficulty} magic={champion.info.magic} />
                </div>
            </div>
        </div>
    )

}


export default ChampionToolTip;