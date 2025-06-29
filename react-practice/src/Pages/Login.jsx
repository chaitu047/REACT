import React, {useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../HOC/Auth/AuthContext';
export default function Login() {

    const { isLoggedIn, login} = useContext(AuthContext);

    const navigate = useNavigate();

    const [input, setInput] = useState({username:'', password: ''});

    const handleChange = (e) => {
        setInput((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Enter Username</label>
                    <input type="text" value={input.username} onChange={handleChange} name="username"/>
                </div>
                <div>
                    <label htmlFor="password">Enter Password</label>
                    <input type="text" value={input.password} onChange={handleChange} name="password"/>    
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}