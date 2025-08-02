import './index.css';
export default function Pagination({ page, setPage }) {

    const threedPrevs = Array.from({ length: 3 }).map((_, index) => page - (3-index)).filter((num) => num > 0);

    const threedNexts = page>3?Array.from({ length: 3 }).map((_, index) => page + index):[];

    const pagesButtons = [...threedPrevs, ...threedNexts];

    return (
        <div className="pagination">
            <div className="arrow" onClick={()=>setPage((prev)=>prev>1?prev-1:prev)}>
                <span>
                    &#x276E;
                </span>
            </div>
            {
                pagesButtons.map((num) => (
                    <div className='arrow' onClick={()=>setPage(num)}>
                        <span>
                            {num}
                        </span>
                    </div>
                ))
            }
            <div className="arrow" onClick={() => setPage((prev)=>prev+1)}>
                <span>
                    &#x276F;
                </span>
            </div>

        </div>
    )
}