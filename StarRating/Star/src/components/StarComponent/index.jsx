import React, { useState } from "react";
import './index.css'

export default function StarComponent({ star_count = 5 }) {
    const [starSelect, setStarSelect] = useState(0);
    const [starHover, setStarHover] = useState(0);
    return (
        <div className="container">
            {new Array(star_count).fill(0).map((_, index) => (<span
                key={`star-${index}`}
                onMouseOver={() => setStarHover(index+1)}
                onClick={() => setStarSelect(index+1)}
                onMouseLeave={() => setStarHover(0)}
                className={(index < starSelect || index < starHover) ? 'gold' : ''}
            >
                ★
            </span>))}
        </div>
    );
}