import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState( localStorage.getItem('theme')||'light');
    
    const toggleTheme = () => {
        setTheme(theme==='light'?'dark':'light');
    }

    useEffect(()=>{
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme);
    },[theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}