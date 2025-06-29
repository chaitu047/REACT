import React from "react"
import './index.css'

export default function Modal({ makeVisible, setMakeVisible, children }) {

    const handleClose = () => {
        setMakeVisible(false);
    }

    return (
        makeVisible ?
            (
                <div className="modal">
                    <div className="modal-container">
                         <span onClick={handleClose}>close</span>
                        {children}
                    </div>
                </div>
            ) : null
    )
}