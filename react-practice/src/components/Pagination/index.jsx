import React, { useEffect, useState } from "react";
import { axiosInstance } from '../../utils/axios';

export default function Pagination() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [input, setInput] = useState({ limit: 10, skip: 0 });

    const getProducts = async ({ limit, skip }) => {
        try {
            setLoading(true);
            const data = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`);
            if (data) {
                setData(data.data.products);
                setLoading(false);
                setTotal(data.data.total/10);
            }
        }
        catch {
            setError(true);
        }
    }

    const handlePagination = (page) => {
        if (page > 0 && page < total) {
            setPage(page);
            setInput((prev) => ({ ...prev, skip: ((page - 1) * 10) }));
        }
    }

    useEffect(() => {
        getProducts(input);
    }, [input]);


    if (error) {
        return <div>Error Loading...</div>
    }

    return (
        <div>
            <h1>Pagination</h1>
            {loading ?
                (<div>Loading... data</div>) :
                (
                    <>
                        <div>
                            <ul>
                                {data.map((p) => (
                                    <li key={p.id}>
                                        {p.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button onClick={() => handlePagination(page - 1)}>Previous</button>
                            <span>Page No: {page}</span>
                            <button onClick={() => handlePagination(page + 1)}>Next</button>
                        </div>
                    </>
                )}
        </div>
    )
}