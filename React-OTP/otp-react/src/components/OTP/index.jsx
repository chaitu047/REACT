import React, { useEffect, useRef, useState } from "react";
import './index.css';

export default function OTP({ otp_length = 6 }) {
    const [otpFields, setOtpFields] = useState(new Array(otp_length).fill(''));
    const otpRef = useRef(new Array(otp_length));

    const handleKeyDown = (e, index) => {
        const key = e.key;
        console.log(key);
        if (key === 'ArrowLeft') {
            if (index > 0) otpRef.current[index - 1].focus();
            return;
        }

        if (key === 'ArrowRight') {
            if (index + 1 < otp_length) otpRef.current[index + 1].focus();
            return;
        }

        const copyOtpFields = [...otpFields];
        if (key === 'Backspace') {
            copyOtpFields[index] = '';
            setOtpFields(copyOtpFields);
            return;
        }

        if (isNaN(key)) {
            return;
        }

        copyOtpFields[index] = key;
        setOtpFields(copyOtpFields);
        if (index + 1 < otp_length) otpRef.current[index + 1].focus();
    }

    useEffect(()=>{
        otpRef.current[0].focus();
    },[]);

    return (
        <div className="otp-container">
            {otpFields.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    ref={(currentElement) => otpRef.current[index] = currentElement}
                    className="otp-field"
                    onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
        </div>
    )
}