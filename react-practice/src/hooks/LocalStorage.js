import { useState, useEffect } from 'react'

export function useLocalStorage(key,val){
    const [value, setValue] = useState(()=>{
        const local = localStorage.getItem(key);
        return local!=null?JSON.parse(local):val
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    },[key,value])

    return [value, setValue];

}