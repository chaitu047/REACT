import { useEffect, useState } from "react";
import Pagination from '../Pagination';
import axios from 'axios';
import './index.css';

export default function Post(){
    const url = 'https://picsum.photos/v2/list?';
    const [data, setData] = useState(null);
    const [ page, setPage ] = useState(1);

    useEffect(()=>{
        axios.get(`${url}page=${page}&limit=4`).then((res)=>{
            setData(res.data)
        }).catch((e)=>{
            setData([]);
        })
    },[page])

    return (
        data && <div className="container">
            <div className="post-container">
                {data.map((value)=>(
                    <div key={value.id} className="post">
                        <img src={value.download_url} width={200} height={300}/>
                    </div>    
                ))}
            </div>
            <div className="pagination-container">
                <Pagination page={page} setPage={setPage}/>
            </div>
        </div>
    )
}