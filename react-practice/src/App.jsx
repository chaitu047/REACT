import { useState } from "react"
import './App.css'

export default function ToDo() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleEdit = ({ idx, item }) => {
    setEditIndex(idx);
    setValue(item);
  }

  const remove = (idx) => {
    setList((prev) => [...prev.filter((val, id) => id !== idx)])
  }

  const add = () => {
    if (editIndex === -1) {
      setList((prev) => [...prev, value])
    }
    else {
      console.log(`edit`);
      setList((prev) => [...prev.map((item, idx) => {
        if (idx !== editIndex) {
          return item;
        }
        else {
          return value
        }
      })])
      setEditIndex(-1);
    }
  }

  return (
    <div className="app-container">
      <h1>ToDo App</h1>
      <div className="input-holder">
        <input type="text" value={value} onChange={(e) => {
          setValue(e.target.value)
        }} />
        <button onClick={add}>add</button>
      </div>
      <div className="list-item-holder">
        {
          list.map((item, idx) => {
            return (
              <div key={`item-${idx}`} className="list-item">
                <div>
                  {item}
                </div>
                <button onClick={() => remove(idx)}>
                  remove
                </button>
                <button onClick={() => handleEdit({ idx, item })}>
                  edit
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}