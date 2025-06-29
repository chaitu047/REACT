import React, { useState, useEffect } from "react"
import { inputData } from './data'
export default function SearchFilter() {

    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        if (value.length > 0) {
            const filterInput = inputData.filter((input) => input.includes(value));
            setResults(filterInput);
        }

    }, [value])

    return (
        <div className="search-container">
            <div className="search-input">
                <input type='search' value={value} onChange={handleSearch} />
            </div>
            <div className="search-results">
                {results.length > 0 ?
                    <ul>
                        {results.map((result, idx) => (
                            <li key={`${result}-${idx}`}>
                                {result}
                            </li>
                        ))}
                    </ul> :
                    null}
            </div>
        </div>
    )
}