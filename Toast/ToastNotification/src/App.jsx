import React from "react";
import { useToast } from "./components/ToastContainer/index.jsx";

export default function App(){

    const { notify } = useToast();

    return(
        <div style={{display: 'flex', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={()=>notify('successfully toasted', 'success')}>
                showToast
            </button>
        </div>
    )
}