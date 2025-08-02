import React from "react";
import OTP from "./components/OTP/index";

export default function App(){
    return(
        <div>
            <OTP otp_length={6} />
        </div>
    )
}