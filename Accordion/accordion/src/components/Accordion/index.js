import data from '../../data.json';
import Faq from '../Faq';
import './index.css'

export default function Accordion(){
    return (
        <div className="container">
            <p className="header">Faq</p>
            {data.faq.map((data, index)=><Faq qn={data.question} ans={data.answer} key={`faq-${index}`}/>)}
        </div>
    )
}