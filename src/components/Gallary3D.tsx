import React, { useState, useEffect, useRef } from "react";
import '../styles/Gallary.css';
import '../styles/ability.css';
interface props {
    children: React.ReactNode[],
    setActive?: (n: number) => any
}

const Gallary3D: React.FC<props> = function ({ children, setActive }) {
    let scroller: any = useRef(0);

    let refs: any = useRef(new Array());


    return (
        <>
            <div onLoad={setRotation} onScroll={setRotation} className="gallary-3d">
                {children.map((n, index) => (
                    <div ref={(element) => refs.current[index] = element} key={index} className="panel"> {n} </div>
                ))}
            </div>  
        </>
    )


    function setRotation() {
        for (let i = 0; i < refs.current.length; i++) {
            refs.current[i].style.transform = getRotation(refs.current[i], i);
        }
    }

    function getRotation(input: any, index: number) {
        let totalWidth = window.innerWidth;
        let rect = input.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        if (x > 0.45 * totalWidth && 0.55 * totalWidth > x) {
            if (setActive) {
                setActive(index);
            }
            return ''
        }
        else if (x < 0.2 * totalWidth || totalWidth * 0.8 < x) {
            return 'rotate3d(-.1, 1, 0, -90deg)'
        }
        else if (x < 0.45 * totalWidth) {
            x = x - 0.2 * totalWidth;
            let deg = x / (0.3 * totalWidth) * 100;
            deg = (90 - deg);
            return `rotate3d(0, 1, 0, ${deg}deg)`;
        }
        else {
            //x position relative to the cut left edge
            x = x - 0.8 * totalWidth;
            let deg = x / (0.3 * totalWidth) * 100;
            deg += 90;
            return `rotate3d(0, 1, 0, ${deg}deg)`;
        }

    }

}


export default Gallary3D;

