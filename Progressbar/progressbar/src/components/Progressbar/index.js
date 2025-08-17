import React from "react";
import './index.css';

export default function Progressbar({progress}){

    return (
        <div className="progress-container">
            <div className="progress" style={{width: `${progress}%`, backgroundColor:'green'}}>
            </div>
        </div>
    )
}