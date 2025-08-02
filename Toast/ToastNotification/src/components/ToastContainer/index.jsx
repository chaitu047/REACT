import React, { createContext, useContext, useRef, useState } from "react";
import './index.css';

const ToastContext = createContext();

export function ToastNotification() {
    const { message, type, show, close } = useContext(ToastContext);

    return (
        show &&
        <div className={`toast-container ${type}`}>
            <div className="toast-content">
                <span className="toast-message">
                    {message}
                </span>
                <span className="toast-close-btn" onClick={close}>
                    x
                </span>
            </div>
        </div>
    )
}

export function useToast() {
    return useContext(ToastContext);
}

export default function ToastContainer({ children }) {

    const [show, setShow] = useState(false);
    const [toastInput, setToastInput] = useState({});
    const toastRef = useRef({});

    const close = () => {
        if (toastRef.current.id) {
            clearTimeout(toastRef.current.id);
        }
        setShow(false);
        setToastInput({});
    }

    const notify = (message, type) => {
        const id = Date.now();
        setToastInput({ id, message, type })
        setShow(true);
        toastRef.current.id = setTimeout(() => close(), 3000);
    }

    return (
        <ToastContext.Provider value={{ show, message: toastInput.message, type: toastInput.type, notify, close }}>
            {children}
            <ToastNotification />
        </ToastContext.Provider>
    )
}