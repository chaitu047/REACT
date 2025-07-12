import { useEffect, useState } from 'react';
import { useFetch } from "../../hooks/Fetch";
import './index.css';

export default function DragNDrop() {

    const { data, loading, error } = useFetch(`https://dummyjson.com/products`);

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        if(!loading && !error){
            if(data){
                setProducts(data.products);
            }
        }
    },[loading, error]);

    const handleDragStart = (e, item, index) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({item,index}));
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const hanldeDrop = (e, targetIndex) => {
        e.preventDefault();
        const {item, index} = JSON.parse(e.dataTransfer.getData('text/plain'));
        setProducts((prev) => {
            const prevCopy = JSON.parse(JSON.stringify(prev));
            prevCopy.splice(index,1);
            prevCopy.splice(targetIndex,0,item);
            console.log(prevCopy);
            return prevCopy;
        });
    }

    return (
        <div className='container'>
            {products.map((item, index)=>{
                return (
                    <div className='list-item' key={item.id} onDragStart={(e) => handleDragStart(e,item,index)} onDragOver={allowDrop} onDrop={(e) => hanldeDrop(e,index)} draggable>
                        <span>{item.title}</span>
                        <span>{item.category}</span>
                        <span>{item.rating}</span>  
                    </div>
                )
            })}
        </div>
    )

}