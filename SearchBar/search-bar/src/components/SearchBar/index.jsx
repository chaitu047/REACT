import { useEffect, useState } from "react"
import axios from "axios";

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            axios.get(`https://dummyjson.com/products/search?q=${query}&limit=10`)
                .then((res) => {
                    setResults(res.data.products);
                    setLoading(false);
                })
        }

        const timerId = setTimeout(fetchData, 3000);
        return () => {
            clearTimeout(timerId);
        }
    }, [query]);

    return (
        <div className="container">
            <div className="search-conatiner">
                <input type="search" value={query} onChange={handleSearch} />
            </div>
            <div className="result-container">
                {(loading === false && results) ? <ul>
                    {results.map((val, index) => (
                        <li key={`search-${index}`}>
                            {val.title}
                        </li>
                    ))}
                </ul> :
                    <span>
                        Loading....
                    </span>
                }
            </div>
        </div>
    )
}