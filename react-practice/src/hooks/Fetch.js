import { useState, useEffect } from "react";

export function useFetch(URL, options={}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        let ignore = false;

        fetch(URL, options)
            .then((data)=>{
                if(!ignore){
                    setData(data);
                }
            })
            .catch(() => {
                if(!ignore) setError(true);
            })
            .finally(() => {
                if(!ignore) setLoading(false);
            })

        return ()=>{
            ignore=true;
        }
        
    },[URL, options])
    return {data, loading, error}
}