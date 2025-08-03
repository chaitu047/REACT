import { useEffect } from "react"

export default function Post({data, setPageNo}){

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                observer.unobserve(lastItem);
                setPageNo((page)=>page+1);
            }
        },{
            threshold: 0.5
        })

        const lastItem = document.querySelector('.image-post:last-child');
        if(!lastItem){
            return;
        }
        observer.observe(lastItem);
        return () => {
            observer.disconnect();
        }
    },[data])

    return (
        <div className="post-image-container">
            {data.map((val,index)=>(
                <div key={`img-${index}`} className="image-post">
                    <img src={val.download_url} width="300px" height="450px" />
                </div>
            ))}
        </div>
    )
}