import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post";

export default function InfiniteScroll(){
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    useEffect(()=>{
        const fetchData = async() => {
            const res = await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`);
            const result = res.data;
            setData((prev) => [...prev,...result]);
        }

        const debounceHandler = setTimeout(fetchData, 0);
        return () => {
            clearTimeout(debounceHandler);
        }
    },[pageNo]);

    return (
        <div className="infinite-scroll-container">
            <Post data={data} setPageNo={setPageNo}/>
        </div>
    )
}