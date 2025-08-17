import { useEffect, useState, useRef } from "react";
import './index.css';

export default function StopWatchCounter() {

    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);


    const handleChange = (e, field) => {
        const value = parseInt(e.target.value, 10) || 0;
        setTime((prevTime) => {
            const copyTime = { ...prevTime };
            copyTime[field] = value;
            copyTime.minutes += Math.floor(copyTime.seconds / 60);
            copyTime.seconds = Math.floor(copyTime.seconds % 60);
            copyTime.hours += Math.floor(copyTime.minutes / 60);
            copyTime.minutes = Math.floor(copyTime.minutes % 60);
            return copyTime;
        })
    }

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {

                setTime((prevTime) => {
                    const copyTime = { ...prevTime };
                    copyTime.seconds--;
                    if (copyTime.seconds < 0) {
                        copyTime.minutes--;
                        copyTime.seconds = 59;
                    }
                    if (copyTime.minutes < 0) {
                        copyTime.hours--;
                        copyTime.minutes = 59;
                    }
                    if (copyTime.hours === 0 && copyTime.minutes === 0 && copyTime.seconds === 0) {
                        clearInterval(timerRef.current);
                        return { hours: "", minutes: "", seconds: "" }
                    }
                    else {
                        return copyTime;
                    }
                })
            }, 1000)
        }

        return () => {
            clearInterval(timerRef.current);
        }
    }, [isRunning]);

    return (
        <div className="container">
            <div className="date-container">
                <input className="input-date" type="text" placeholder="HH" value={time.hours} name="hours" onChange={(e) => handleChange(e, "hours")} />
                <input className="input-date" type="text" placeholder="mm" value={time.minutes} name="minutes" onChange={(e) => handleChange(e, "minutes")} />
                <input className="input-date" type="text" placeholder="ss" value={time.seconds} name="seconds" onChange={(e) => handleChange(e, "seconds")} />
            </div>
            <div className="btn-container">
                <button onClick={() => {setTime({ hours: 0, minutes: 0, seconds: 0 });setIsRunning(!isRunning)}}>reset</button>
                <button onClick={() => setIsRunning(!isRunning)}>start</button>
            </div>
        </div>
    )
}