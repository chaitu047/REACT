import React, { useState } from "react";
import { Link } from "react-router-dom"

export default function AppMenu() {
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <div>
                <label>choose the App</label>
                <i onClick={() => setExpand(!expand)}>{!expand ? 'V' : 'A'}</i>
            </div>
            {
                expand ?
                    (
                        <div>
                            <ul>
                                <li>
                                    <Link to='/todo'>
                                        ToDo
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/form'>
                                        Form
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/search'>
                                        Search
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/modal'>
                                        Modal
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/pagination'>
                                        Pagination
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : null
            }
        </div>
    )
}