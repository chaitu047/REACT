import React, { useEffect, useRef, useState } from "react";
import data from '../../data.json';
import './index.css';

const DATA_LENGTH = data.length;

export default function ImgCarousel() {
    const [page, setPage] = useState(0);

    const ref = useRef(null);

    const threedPrevs = Array.from({ length: 3 }).fill(0).map((_, index) => page - (3 - index)).filter((num) => num > 0);

    const threedNexts = Array.from({ length: 3 }).fill(0).map((_, index) => index + 1);

    const paginationbtns = [...threedPrevs, ...threedNexts];

    const handlePrev = () => {

        setPage((prev) => {
            if (prev > 0) {
                return prev - 1;
            }
            else {
                return DATA_LENGTH - 1;
            }
        });
    }

    const handleNext = () => {

        setPage((prev) => {
            if (prev < DATA_LENGTH - 1) {
                return prev + 1;
            }
            else {
                return 0;
            }
        })
    }

    useEffect(() => {
        ref.current = setInterval(handleNext, 3000);
        return () => {
            clearInterval(ref.current);
        }
    }, []);

    return (
        <div className="container">
            <div className="img-container" onMouseEnter={()=>clearInterval(ref.current)} onMouseLeave={()=>ref.current = setInterval(handleNext,3000)}>
                <img src={data[page].download_url} />
                <button className="right" onClick={() => handleNext()}>►</button>
                <button className="left" onClick={() => handlePrev()}>◄</button>
                <div className="pagination">{paginationbtns.map((value, index) => (
                    <span key={index} onClick={() => setPage(value)}>
                        •
                    </span>
                ))}</div>
            </div>
        </div>
    )
}