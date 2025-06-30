import { useState, useEffect } from "react";

export const useDebounce = (input, delay) => {
    const [value, setValue] = useState(null);

    useEffect(()=>{
        const hanlder = setTimeout(() => setValue(input), delay);
        return () => clearTimeout(hanlder);
    },[input,delay]);

    return value;
}