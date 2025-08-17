import { useState } from "react"
import './index.css'

export default function Faq({ qn, ans }) {
    const [show, setShow] = useState(false);

    return (<div className="faq-container">
            <p>{qn}</p>
            <span className="show" onClick={()=>setShow((prev)=>!prev)}>+</span>
            {show && <p>
            {ans}
        </p>}
    </div>)
}