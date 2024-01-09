import React from "react"

const LargeTextBlurb:React.FC<{text:string | undefined}> = function({text}){
    return (
        <div className="large-blurb">
            {text}
        </div>
    )
}


export default LargeTextBlurb;