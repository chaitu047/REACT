import React, { useState } from "react";

export default function FormApp() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' value={input.name} onChange={handleChange} name="name" placeholder="Enter name..." />
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input type='text' value={input.email} onChange={handleChange} name="email" placeholder="Enter email..." />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input type='text' value={input.password} onChange={handleChange} name="password" placeholder="Enter Password..." />
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}