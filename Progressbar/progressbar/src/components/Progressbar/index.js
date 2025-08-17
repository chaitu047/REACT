import React from "react";
import './index.css';

export default function Progressbar({progress, sx}){

    return (
        <div className="progress-container" style={sx}>
            <div className="progress" style={{width: `${progress}%`, backgroundColor:'green'}}>
            </div>
        </div>
    )
}