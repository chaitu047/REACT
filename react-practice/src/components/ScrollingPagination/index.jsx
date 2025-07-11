import { useRef, useState, useEffect } from "react";
import { useFetch } from "../../hooks/Fetch";
import './index.css';

export default function ScrollingPagination() {
    const [pagination, setPagination] = useState({limit:10,offset:0});
    const [page,setPage] = useState(1);
    const paginationRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = () => {
        const rect = paginationRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        console.log('rect', rect, 'windowHeight', windowHeight);

        if(rect.top < windowHeight && rect.bottom >= 0){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    }

    const { data, error, loading } = useFetch(`https://dummyjson.com/products?limit=${pagination.limit}&skip=${pagination.offset}`);

    useEffect(()=>{

        const handleScroll = () => {
            checkVisibility();
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

    useEffect(()=>{
        if(isVisible){
            setPage((prev)=>prev+1);
            setIsVisible(false);
        }
    },[isVisible]);

    useEffect(()=>{
        setPagination((prev)=>({...prev,offset:(page-1)*10}))
    },[page])

    return (
        <div className="container">
            {!loading && !error && data && data.products.map((product)=>{
                return (
                    <div key={product.id} className="list-item">
                        <span>{product.title}</span>
                        <span>{product.category}</span>
                        <span>{product.rating}</span>    
                    </div>
                )
            })}
            <div ref={paginationRef}></div>
        </div>
    ) 
}